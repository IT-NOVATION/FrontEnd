import { useState } from "react";
import { ISignupFormFirst, ISignupFormSecond } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";
function SignupForm({
  setIsSigningup,
}: {
  setIsSigningup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isFirstStage, setIsFirstStage] = useState<boolean>(true);
  const handleGoBackClick = () => setIsSigningup(false);
  const {
    register: firstRegister,
    handleSubmit: firstHandleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<ISignupFormFirst>();
  const {
    register: secondRegister,
    handleSubmit: secondHandleSubmit,
    trigger: secondTrigger,
    formState: { errors: secondErrors },
  } = useForm<ISignupFormSecond>({
    defaultValues: {
      nick_name: "",
      introduction: "",
    },
  });
  const onFirstValid = (data: ISignupFormFirst) => {
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", {
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      setIsFirstStage(false);
    }
  };

  const onSecondValid = (data: ISignupFormSecond) => {};
  return (
    <S.Container>
      <h1>회원가입</h1>
      {isFirstStage ? (
        <S.Form onSubmit={firstHandleSubmit(onFirstValid)}>
          <div>
            <label>이메일</label>
            <input
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
            />
            <button>중복검사</button>
            <div>{errors.email?.message}</div>
          </div>
          <div>
            <label>비밀번호</label>
            <input
              {...firstRegister("password", {
                required: "비밀번호를 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9!@#$%^&*()?_~]{6,16}$/,
                  message: "비밀번호는 영문/숫자 조합 6~16자 입니다",
                },
                onChange: () => trigger("password"),
              })}
              placeholder="비밀번호"
              type="password"
            />
            <div>{errors.password?.message}</div>
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              {...firstRegister("verifyPassword", {
                required: "비밀번호를 입력해주세요",
                onChange: () => trigger("verifyPassword"),
              })}
              placeholder="비밀번호 확인"
              type="password"
            />
            <div>{errors.verifyPassword?.message}</div>
          </div>
          <button>가입</button>
        </S.Form>
      ) : (
        <S.Form onSubmit={secondHandleSubmit(onSecondValid)}>
          <div>
            <label>닉네임</label>
            <input
              {...secondRegister("nick_name", {
                required: true,
                minLength: 2,
                maxLength: 10,

                onChange: () => secondTrigger("nick_name"),
              })}
              placeholder="닉네임"
              type="text"
            />
            <div>{secondErrors.nick_name?.message}</div>
          </div>
          <div>
            <label>한줄소개</label>
            <textarea
              {...secondRegister("introduction")}
              placeholder="한줄소개"
            />
          </div>
          <button>제출</button>
        </S.Form>
      )}
      <button onClick={handleGoBackClick}>뒤로가기</button>
    </S.Container>
  );
}
export default SignupForm;
