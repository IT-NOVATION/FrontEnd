import { AccountApi } from "@apis/accountApi";
import useIsAbled from "@hooks/useIsAbled";
import { IAccountInfo, IFindPassword } from "@interfaces/forms";
import { ModalState, modalStateAtom } from "@recoil/atoms";
import { Block, Button, Input, Text } from "@styles/UI";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

function GetCodeForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<IFindPassword>();

  const { isAbled, handleIsAbled } = useIsAbled({ watch, errors, modalState });
  const [emailSent, setEmailSent] = useState(false);

  const onValid = async (data: IFindPassword) => {
    emailSent
      ? await AccountApi.codeCheck(data).then(() => {
          localStorage.setItem("passwordFind-email", data.email);
          setModalState(ModalState.ChangePasswordForm);
        })
      : await AccountApi.sendCode(data.email).then(() => setEmailSent(true));
  };

  return (
    <Block.FormWrapper>
      <Text.Body1 margin="30px 0 7px 0">비밀번호를 잊어버리셨나요?</Text.Body1>
      <Text.Body1 margin="0 0 35px 0">
        가입하신 이메일로 인증번호를 받아보세요
      </Text.Body1>
      <Block.Form onSubmit={handleSubmit(onValid)} onChange={handleIsAbled}>
        <Block.FormInputSection>
          <Input.FormInput
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: "정확하지 않은 이메일입니다",
              },
              onChange: () => trigger("email"),
            })}
            placeholder="이메일"
            type="email"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.email}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.email?.message}</Text.Body5>
          </Block.ErrorMessage>
        </Block.FormInputSection>

        <Block.FormInputSection>
          <Input.FormInput
            {...register("code", {
              required: emailSent && "인증코드를 입력해주세요.",
              onChange: () => trigger("code"),
            })}
            placeholder="인증번호"
            type="text"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.code}
            disabled={!emailSent}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.code?.message}</Text.Body5>
          </Block.ErrorMessage>
          <Button.FormButton disabled={!isAbled}>
            <Text.Body1>
              {emailSent ? "인증번호 확인" : "인증번호 전송"}
            </Text.Body1>
          </Button.FormButton>
        </Block.FormInputSection>
      </Block.Form>
    </Block.FormWrapper>
  );
}
export default GetCodeForm;
