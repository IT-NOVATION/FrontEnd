import { AccountApi } from "@apis/accountApi";
import useIsAbled from "@hooks/useIsAbled";
import useShowPassword from "@hooks/useShowPassword";
import { IAccountInfo } from "@interfaces/forms";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";
import { Block, Text, Input, Button } from "@styles/UI";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRecoilState } from "recoil";

function ChangePasswordForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
    watch,
  } = useForm<IAccountInfo>();
  const { isAbled, setIsAbled, handleIsAbled } = useIsAbled({
    watch,
    errors,
    modalState,
  });
  const password = useShowPassword();
  const verifyPassword = useShowPassword();
  const onValid = async ({ password }: IAccountInfo) => {
    const email = localStorage.getItem("passwordFind-email");
    if (!email) throw Error("no email");
    try {
      await AccountApi.changePassword({ email, password }).then((res) =>
        console.log(res)
      );
      alert("새 비밀번호 설정이 완료되었습니다!");
      setModalState(ModalState.LoginForm);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Block.FormWrapper>
      <Text.Body1 margin="30px 0 35px 0">새 비밀번호를 설정해주세요</Text.Body1>

      <Block.Form onSubmit={handleSubmit(onValid)} onChange={handleIsAbled}>
        <Block.FormInputSection>
          <Input.FormInput
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
                message: "비밀번호는 영문/숫자 조합 6~16자 입니다",
              },
              onChange: () => trigger("password"),
            })}
            placeholder="비밀번호 (영문/숫자 조합 6~16자)"
            type={`${password.type}`}
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.password}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.password?.message}</Text.Body5>
          </Block.ErrorMessage>
          <Block.EyeIcon onClick={password.toggleShow}>
            {password.type === "password" ? (
              <AiFillEye size="24" />
            ) : (
              <AiFillEyeInvisible size="24" />
            )}
          </Block.EyeIcon>
        </Block.FormInputSection>

        <Block.FormInputSection>
          <Input.FormInput
            {...register("verifyPassword", {
              required: "비밀번호를 입력해주세요",
              onChange: () => {
                if (watch("password") !== watch("verifyPassword")) {
                  setError("verifyPassword", {
                    message: "비밀번호가 일치하지 않습니다",
                  });
                } else {
                  clearErrors("verifyPassword");
                  setIsAbled(true);
                }
              },
            })}
            placeholder="비밀번호 확인"
            type={`${verifyPassword.type}`}
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.verifyPassword}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">
              {errors.verifyPassword?.message}
            </Text.Body5>
          </Block.ErrorMessage>
          <Block.EyeIcon onClick={verifyPassword.toggleShow}>
            {verifyPassword.type === "password" ? (
              <AiFillEye size="24" />
            ) : (
              <AiFillEyeInvisible size="24" />
            )}
          </Block.EyeIcon>
          <Button.FormButton disabled={!isAbled}>
            <Text.Body1>확인</Text.Body1>
          </Button.FormButton>
        </Block.FormInputSection>
      </Block.Form>
    </Block.FormWrapper>
  );
}
export default ChangePasswordForm;
