import { useState } from "react";
import { ILoginForm } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";

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
            <h1>It's MOVIE TIME에</h1>
            <h1>오신 것을 환영합니다.</h1>
            <br />
            <h1>간단하게 무비타임에 참여해볼까요?</h1>

            <S.Form onSubmit={handleSubmit(onValid)} onChange={handleEnter}>
                <div>
                    <label>이메일</label>
                    <input {...register("email")} name="email" placeholder="이메일" />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input
                        {...register("password")}
                        name="password"
                        type={isShow ? "text" : "password"}
                        placeholder="비밀번호"
                    />
                    <div onClick={handleShow}>눈</div>
                </div>
                <button disabled={isEntered ? false : true}>로그인</button>
            </S.Form>
        </S.Container>
    );
}
