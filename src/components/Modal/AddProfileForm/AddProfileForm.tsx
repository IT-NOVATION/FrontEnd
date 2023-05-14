import { useForm } from "react-hook-form";
import { IProfileForm } from "../../../interfaces/forms";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../../recoil/atoms";
import { useState } from "react";
import { Block, Button, Input, Text } from "../../../styles/UI";
import React from "react";

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
        <Block.FormWrapper>
            <Text.Body1 margin="28px 0 40px 0 ">회원가입</Text.Body1>
            <Block.Form onChange={handleEnter} onSubmit={handleSubmit(onValid)}>
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
                            maxLength: { value: 50, message: "한줄소개가 너무 깁니다" },
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
                <Button.FormButton disabled={!isEntered} margin="20px 0 21px 0">
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
