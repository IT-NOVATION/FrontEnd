import { useState } from "react";
import { ISignupForm } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { postSignup } from "../../../apis/accountApi";
import {
  ErrorMessage,
  FormInput,
  FormInputSection,
  EyeIcon,
} from "../../../styles/InputStyle";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useShowPassword from "../../../hooks/useShowPassword";
import { Body1, Body3 } from "../../../styles/TextStyle";
import { FormButton } from "../../../styles/ButtonStyle";
import theme from "../../../styles/theme";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../../recoil/atoms";
function SignupForm() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
    watch,
  } = useForm<ISignupForm>();
  const password = useShowPassword();
  const verifyPassword = useShowPassword();
  const [isEntered, setIsEntered] = useState<boolean>(false);

  const handleGoLogin = () => setModalState(1);

  const handleEnter = () => {
    if (
      //모든 항목들이 입력됐고, 에러가 없을 때만 제출 가능
      watch("email").length &&
      watch("password").length &&
      watch("verifyPassword")?.length &&
      !errors.email?.message &&
      !errors.password?.message &&
      !errors.verifyPassword?.message
    ) {
      setIsEntered(true);
    } else setIsEntered(false);
  };
  const onValid = (data: ISignupForm) => {
    try {
      // 서버에서 이메일 중복검사...
      postSignup({ email: data.email, password: data.password });
    } catch (err) {
      console.log(err);
    }
    setModalState(4);
  };

  return (
    <S.Container>
      <Body1 margin="28px 0 40px 0 ">회원가입</Body1>
      <S.Form onChange={handleEnter} onSubmit={handleSubmit(onValid)}>
        <FormInputSection>
          <FormInput
            {...register("email", {
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
            {...register("verifyPassword", {
              required: "비밀번호를 입력해주세요",
              onChange: () => {
                if (watch("password") !== watch("verifyPassword")) {
                  setError("verifyPassword", {
                    message: "비밀번호가 일치하지 않습니다",
                  });
                } else {
                  clearErrors("verifyPassword");
                  setIsEntered(true);
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
          <ErrorMessage>{errors.verifyPassword?.message}</ErrorMessage>
          <EyeIcon onClick={verifyPassword.toggleShow}>
            {verifyPassword.type === "password" ? (
              <AiFillEye size="24" />
            ) : (
              <AiFillEyeInvisible size="24" />
            )}
          </EyeIcon>
        </FormInputSection>
        <FormButton disabled={!isEntered} margin="20px 0 16px 0 ">
          <Body1>회원가입</Body1>
        </FormButton>
      </S.Form>
      <Body3 margin="0 9px 0 113px ">이미 가입하셨나요?</Body3>
      <Body3 onClick={handleGoLogin} pointer color={`${theme.colors.main}`}>
        로그인
      </Body3>
    </S.Container>
  );
}
export default SignupForm;
