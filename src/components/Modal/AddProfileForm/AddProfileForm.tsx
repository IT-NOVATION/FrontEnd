import * as S from "./style";
import { useForm } from "react-hook-form";
import { IProfileForm } from "../../../interfaces/forms";
import {
  ErrorMessage,
  FormInput,
  FormInputSection,
} from "../../../styles/InputStyle";
import { FormButton } from "../../../styles/ButtonStyle";
import { Body1, Body3 } from "../../../styles/TextStyle";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../../recoil/atoms";
import theme from "../../../styles/theme";
import { useState } from "react";

function AddProfileForm() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
  } = useForm<IProfileForm>({
    defaultValues: {
      nickname: "",
      introduction: "",
    },
  });
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const handleEnter = () => {
    if (watch("nickname")?.length && !errors.nickname?.message) {
      setIsEntered(true);
    } else setIsEntered(false);
  };
  const handleGoLogin = () => setModalState(1);

  const onValid = (data: IProfileForm) => {
    //서버에 프로필 정보 제출...
  };
  return (
    <S.Container>
      <Body1 margin="28px 0 40px 0 ">회원가입</Body1>
      <S.Form onChange={handleEnter} onSubmit={handleSubmit(onValid)}>
        <FormInputSection>
          <FormInput
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
          <ErrorMessage>{errors.nickname?.message}</ErrorMessage>
        </FormInputSection>
        <FormInputSection>
          <FormInput
            {...register("introduction", {
              maxLength: { value: 50, message: "한줄소개가 너무 깁니다" },
              onChange: () => trigger("introduction"),
            })}
            placeholder="한줄 소개 (50자 이내)"
            width="406px"
            height="35px"
            fontSize="16px"
            error={!!errors.introduction}
          />
          <ErrorMessage>{errors.introduction?.message}</ErrorMessage>
        </FormInputSection>
        <FormButton disabled={!isEntered} margin="20px 0 21px 0">
          <Body3>제출</Body3>
        </FormButton>
      </S.Form>
      <Body3 margin="0 9px 0 113px ">이미 가입하셨나요?</Body3>
      <Body3 onClick={handleGoLogin} pointer color={`${theme.colors.main}`}>
        로그인
      </Body3>
    </S.Container>
  );
}
export default AddProfileForm;
