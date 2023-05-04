import * as S from "./style";
import { useForm } from "react-hook-form";
import { IProfileForm } from "../../../interfaces/forms";
import {
  ErrorMessage,
  FormInput,
  FormInputSection,
} from "../../../styles/InputStyle";
import { FormButton } from "../../../styles/ButtonStyle";
import { error } from "console";

function AddProfileForm() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IProfileForm>({
    defaultValues: {
      nickname: "",
      introduction: "",
    },
  });

  const onValid = (data: IProfileForm) => {
    //서버에 프로필 정보 제출...
  };
  return (
    <S.Form onSubmit={handleSubmit(onValid)}>
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
      <FormButton margin="42px 0 21px 0">제출</FormButton>
    </S.Form>
  );
}
export default AddProfileForm;
