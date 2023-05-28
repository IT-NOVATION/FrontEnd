import { IAccountInfo } from "@interfaces/forms";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useShowPassword from "@hooks/useShowPassword";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "@recoil/atoms";
import { Block, Button, Input, Text } from "@styles/UI";
import useIsAbled from "@hooks/useIsAbled";
function SignupForm() {
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
  const password = useShowPassword();
  const verifyPassword = useShowPassword();

  const handleGoLogin = () => setModalState(1);
  const { isAbled, setIsAbled, handleIsAbled } = useIsAbled({
    watch,
    errors,
    modalState,
  });

  const onValid = (data: IAccountInfo) => {
    try {
      // 서버에서 이메일 중복검사...
    } catch (err) {
      console.log(err);
    }
    setModalState(4);
  };

  return (
    <Block.FormWrapper>
      <Text.Body1 margin="28px 0 40px 0 ">회원가입</Text.Body1>
      <Block.Form onChange={handleIsAbled} onSubmit={handleSubmit(onValid)}>
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
        </Block.FormInputSection>
        <Button.FormButton disabled={!isAbled} margin="20px 0 16px 0">
          <Text.Body1>회원가입</Text.Body1>
        </Button.FormButton>
      </Block.Form>
      <Text.Body3 margin="0 9px 0 113px ">이미 가입하셨나요?</Text.Body3>
      <Text.Body3 onClick={handleGoLogin} pointer color="main">
        로그인
      </Text.Body3>
    </Block.FormWrapper>
  );
}
export default SignupForm;
