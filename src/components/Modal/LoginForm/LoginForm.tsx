import { useState } from "react";
import { ILoginForm } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { Margin, Text } from "../../../components/ui";

export default function LoginForm() {
    const { register, handleSubmit, watch } = useForm<ILoginForm>();
    const [isEntered, setIsEntered] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);
    const handleShow = () => {
        setIsShow(prev => !prev);
    };

    const handleEnter = () => {
        if (watch("email").length && watch("password").length) setIsEntered(true);
        else setIsEntered(false);
    };
    const onValid = (data: ILoginForm) => {
        console.log(data);
    };

    return (
        <S.Container>
            <Text.Title3>It's MOVIE TIME에</Text.Title3>
            <Margin direction="column" size={10} />
            <Text.Title3>오신 것을 환영합니다.</Text.Title3>
            <Margin direction="column" size={40} />
            <Text.Body1>간단하게 무비타임에 참여해볼까요?</Text.Body1>
            <Margin direction="column" size={32} />
            <S.Form onSubmit={handleSubmit(onValid)} onChange={handleEnter}>
                <Margin direction="column" size={40} />
                <div>
                    <input {...register("email")} name="email" placeholder="이메일" />
                </div>
                <Margin direction="column" size={20} />
                <div>
                    <input
                        {...register("password")}
                        name="password"
                        type={isShow ? "text" : "password"}
                        placeholder="비밀번호"
                    />
                    <div onClick={handleShow}>눈</div>
                </div>
                <Margin direction="column" size={20} />
                <S.Button disabled={isEntered ? false : true}>
                    <Text.Body1>로그인</Text.Body1>
                </S.Button>
            </S.Form>
        </S.Container>
    );
}
