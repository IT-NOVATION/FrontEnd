import useIsAbled from "@hooks/useIsAbled";
import { IAccountInfo, IFindPassword } from "@interfaces/forms";
import { modalStateAtom } from "@recoil/atoms";
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

  const onValid = (data: IFindPassword) => {
    // 이메일로 인증 번호 요청 api..
    // 인증번호 일치여부 확인 api...
    emailSent ? setModalState(8) : setEmailSent(true);
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
