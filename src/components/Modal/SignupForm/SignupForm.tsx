import { ISignupForm } from "../../../interfaces/forms";
import * as S from "./style";
import { useForm } from "react-hook-form";
function SignupForm({
  setIsSigningup,
}: {
  setIsSigningup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleGoBackClick = () => setIsSigningup(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<ISignupForm>();

  const onValid = (data: ISignupForm) => {
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", {
        message: "비밀번호가 일치하지 않습니다",
      });
    }
  };
  return (
    <S.Container>
      <h1>회원가입</h1>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <div>
          <label>아이디</label>
          <input
            {...register("user_name", {
              required: "아이디를 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()?_~]{8,20}$/,
                message: "조건에 맞게 다시 입력해주세요",
              },
              onChange: () => trigger("user_name"),
            })}
            placeholder="아이디"
            type="text"
          />
          <button>중복검사</button>
          <div>{errors.user_name?.message}</div>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()?_~]{10,20}$/,
                message: "조건에 맞게 다시 입력해주세요",
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
            {...register("verifyPassword", {
              required: "비밀번호를 입력해주세요",
              onChange: () => trigger("verifyPassword"),
            })}
            placeholder="비밀번호 확인"
            type="password"
          />
          <div>{errors.verifyPassword?.message}</div>
        </div>
        <div>
          <label>이메일</label>
          <input
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: "올바르지 않은 이메일 형식입니다",
              },
              onChange: () => trigger("email"),
            })}
            placeholder="이메일"
            type="text"
          />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label>닉네임</label>
          <input
            {...register("nickname", {
              required: true,
              minLength: 2,
              onChange: () => trigger("nickname"),
            })}
            placeholder="닉네임"
            type="text"
          />
          <div>{errors.nickname?.message}</div>
        </div>
        <div>
          <label>한줄소개</label>
          <textarea {...register("introduction")} placeholder="한줄소개" />
        </div>
        <button>가입</button>
      </S.Form>
      <button onClick={handleGoBackClick}>뒤로가기</button>
    </S.Container>
  );
}
export default SignupForm;
