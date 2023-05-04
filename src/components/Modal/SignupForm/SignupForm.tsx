import { useState } from "react";
import { ISignupFormFirst } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { postSignup } from "../../../apis/accountApi";
import {
  ErrorMessage,
  FormInput,
  FormInputSection,
  EyeIcon,
} from "../../../styles/FormStyle";
import AddProfileForm from "../AddProfileForm/AddProfileForm";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useShowPassword from "../../../hooks/useShowPassword";
function SignupForm({
  setIsSigningup,
}: {
  setIsSigningup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isFirstStage, setIsFirstStage] = useState<boolean>(true);
  const {
    register: firstRegister,
    handleSubmit: firstHandleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<ISignupFormFirst>();

  const password = useShowPassword();
  const verifyPassword = useShowPassword();

  const onFirstValid = (data: ISignupFormFirst) => {
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", {
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      try {
        const dto = { email: data.email, password: data.password };
        postSignup(dto);
      } catch (err) {
        console.log(err);
      }
      setIsFirstStage(false);
    }
  };

  return (
    <S.Container>
      <h1>회원가입</h1>
      {isFirstStage ? (
        <S.Form onSubmit={firstHandleSubmit(onFirstValid)}>
          <FormInputSection>
            <FormInput
              {...firstRegister("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "정확하지 않은 이메일입니다",
                },
                onChange: () => trigger("email"),
              })}
              placeholder="이메일"
              type="text"
              width="406px"
              height="35px"
              fontSize="16px"
              error={!!errors.email}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </FormInputSection>
          <FormInputSection>
            <FormInput
              {...firstRegister("password", {
                required: "비밀번호를 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*()?_~]{6,16}$/,
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
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <EyeIcon onClick={password.toggleShow}>
              {password.type === "password" ? (
                <AiFillEye size="24" />
              ) : (
                <AiFillEyeInvisible size="24" />
              )}
            </EyeIcon>
          </FormInputSection>
          <FormInputSection>
            <FormInput
              {...firstRegister("verifyPassword", {
                required: "비밀번호를 입력해주세요",
                onChange: () => trigger("verifyPassword"),
              })}
              placeholder="비밀번호 확인"
              type={`${verifyPassword.type}`}
              width="406px"
              height="35px"
              fontSize="16px"
              error={!!errors.verifyPassword}
            />
            <ErrorMessage>{errors.verifyPassword?.message}</ErrorMessage>
            <EyeIcon onClick={verifyPassword.toggleShow}>
              {verifyPassword.type === "password" ? (
                <AiFillEye size="24" />
              ) : (
                <AiFillEyeInvisible size="24" />
              )}
            </EyeIcon>
          </FormInputSection>
          <button>가입</button>
        </S.Form>
      ) : (
        <AddProfileForm />
      )}
    </S.Container>
  );
}
export default SignupForm;
