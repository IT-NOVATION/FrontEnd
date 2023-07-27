import { useForm } from "react-hook-form";
import { IAccountInfo } from "@interfaces/forms";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";
import { Block, Button, Input, Text } from "@styles/UI";
import { useRecoilState } from "recoil";
import useIsAbled from "@hooks/useIsAbled";
import { AccountApi } from "@apis/accountApi";

function AddProfileForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    formState: { errors },
    watch,
  } = useForm<IAccountInfo>({
    defaultValues: {
      nickname: "",
      introduction: "",
    },
  });

  const { isAbled, handleIsAbled } = useIsAbled({ watch, errors, modalState });

  const handleGoLogin = () => setModalState(ModalState.LoginForm);

  const onValid = async ({ nickname, introduction }: IAccountInfo) => {
    const email = localStorage.getItem("signup-email"); // 이전 회원가입 단계에서 입력했던 이메일 가져오기
    if (!email) throw Error("no email");
    try {
      await AccountApi.addProfile({
        email,
        nickname,
        introduction,
      });
      alert("It's Movie Time의 회원이 되신 걸 축하드립니다!");
      setModalState(ModalState.Off);
    } catch (error) {
      setError("nickname", { message: "이미 사용중인 닉네임입니다." });
    }
  };
  return (
    <Block.FormWrapper>
      <Text.Body1 margin="28px 0 40px 0 ">회원가입</Text.Body1>
      <Block.Form onChange={handleIsAbled} onSubmit={handleSubmit(onValid)}>
        <Block.FormInputSection>
          <Input.FormInput
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
              minLength: { value: 2, message: "닉네임이 너무 짧습니다" },
              maxLength: { value: 10, message: "닉네임이 너무 깁니다" },
              onChange: () => trigger("nickname"),
            })}
            placeholder="닉네임"
            type="text"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.nickname}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.nickname?.message}</Text.Body5>
          </Block.ErrorMessage>
        </Block.FormInputSection>
        <Block.FormInputSection>
          <Input.FormInput
            {...register("introduction", {
              maxLength: { value: 40, message: "한줄소개가 너무 깁니다" },
              onChange: () => trigger("introduction"),
            })}
            placeholder="한줄 소개 (50자 이내)"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.introduction}
          />
          <Block.ErrorMessage>
            <Text.Body5 color="red">{errors.introduction?.message}</Text.Body5>
          </Block.ErrorMessage>
        </Block.FormInputSection>
        <Button.FormButton disabled={!isAbled} margin="20px 0 21px 0">
          <Text.Body1>제출</Text.Body1>
        </Button.FormButton>
      </Block.Form>
      <Text.Body3 margin="0 9px 0 113px ">이미 가입하셨나요?</Text.Body3>
      <Text.Body3 onClick={handleGoLogin} pointer color="main">
        로그인
      </Text.Body3>
    </Block.FormWrapper>
  );
}
export default AddProfileForm;
