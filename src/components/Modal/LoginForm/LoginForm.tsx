import { IAccountInfo } from "@interfaces/forms";
import { useForm } from "react-hook-form";
import { Block, Button, Input, Text } from "@styles/UI";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useShowPassword from "@hooks/useShowPassword";
import { useRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";
import useIsAbled from "@hooks/useIsAbled";
import {
  AccountApi,
  GOOGLE_LOGIN_URI,
  KAKAO_LOGIN_URI,
  NAVER_LOGIN_URI,
} from "@apis/accountApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function LoginForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<IAccountInfo>();

  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const handleGoSignup = () => setModalState(ModalState.TermsForm);

  const password = useShowPassword();
  const handleFindPassword = () => {
    setModalState(ModalState.GetCodeForm);
  }; // 비밀번호 찾기 링크 연결

  const handleGoGoogleLogin = () => {
    window.location.href = `${GOOGLE_LOGIN_URI}`;
  }; // 구글로 로그인하기 링크 연결
  const handleGoNaverLogin = () => {
    window.location.href = `${NAVER_LOGIN_URI}`;
  }; // 네이버로 로그인하기 링크 연결
  const handleGoKakaoLogin = () => {
    window.location.href = `${KAKAO_LOGIN_URI}`;
  }; // 카카오로 로그인하기 링크 연결
  const { isAbled, handleIsAbled } = useIsAbled({ watch, errors, modalState });

  const onValid = async (data: IAccountInfo) => {
    try {
      const { accessToken, refreshToken } = await AccountApi.login(data);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      await queryClient.invalidateQueries();
      setModalState(ModalState.Off);
      window.location.reload();
    } catch (err) {
      alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Block.FormWrapper>
      <Text.Body1 margin="37px 0 32px 0">
        간단하게 무비타임에 참여해볼까요?
      </Text.Body1>
      <Block.Form onSubmit={handleSubmit(onValid)}>
        <Block.FormInputSection onChange={handleIsAbled}>
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
            type="text"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.email}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.email?.message}</Text.Body5>
          </Block.ErrorMessage>
        </Block.FormInputSection>

        <Block.FormInputSection onChange={handleIsAbled}>
          <Input.FormInput
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              onChange: () => trigger("password"),
            })}
            placeholder="비밀번호"
            type={`${password.type}`}
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.password}
          />
          <Block.EyeIcon onClick={password.toggleShow}>
            {password.type === "password" ? (
              <AiFillEye size="24" />
            ) : (
              <AiFillEyeInvisible size="24" />
            )}
          </Block.EyeIcon>
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.password?.message}</Text.Body5>
          </Block.ErrorMessage>

          <Button.FormButton disabled={!isAbled}>
            <Text.Body1>로그인</Text.Body1>
          </Button.FormButton>
        </Block.FormInputSection>
      </Block.Form>

      <Block.ColumnBox direction="column" alignItems="center">
        <Text.Body3
          margin="24px 0 12px 0"
          onClick={handleFindPassword}
          pointer
          color="main"
        >
          비밀번호를 잊어버리셨나요?
        </Text.Body3>
        <Text.Body3 margin="0 0 25px 0" color="darkGray">
          계정이 없으신가요?
          <Text.Body3
            margin="0 0 0 9px"
            onClick={handleGoSignup}
            pointer
            color="main"
          >
            회원가입
          </Text.Body3>
        </Text.Body3>
      </Block.ColumnBox>

      <Block.Bar width="406px" height="0.5px" color="gray" />
      <>
        <Text.Body3 margin="17px 9px 19px 130px" color="black">
          간편하게 SNS 로그인
        </Text.Body3>

        <Block.RowBox>
          <Block.ColumnBox
            direction="column"
            alignItems="center"
            pointer
            onClick={handleGoGoogleLogin}
          >
            <img src="/images/google.png" alt="google" width={55} />
            <Text.Body1 margin="10px 0 0 0">구글</Text.Body1>
          </Block.ColumnBox>
          <Block.ColumnBox
            direction="column"
            alignItems="center"
            pointer
            onClick={handleGoNaverLogin}
          >
            <img src="/images/naver.png" alt="naver" width={55} />
            <Text.Body1 margin="10px 0 0 0">네이버</Text.Body1>
          </Block.ColumnBox>
          <Block.ColumnBox
            direction="column"
            alignItems="center"
            pointer
            onClick={handleGoKakaoLogin}
          >
            <img src="/images/kakao.png" alt="kakao" width={55} />
            <Text.Body1 margin="10px 0 0 0">카카오</Text.Body1>
          </Block.ColumnBox>
        </Block.RowBox>
      </>
    </Block.FormWrapper>
  );
}
