import { useForm } from "react-hook-form";
import { ISignupFormSecond } from "../../../interfaces/forms";

function AddProfileForm() {
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

  const onSecondValid = (data: ISignupFormSecond) => {};
  return (
    <form onSubmit={secondHandleSubmit(onSecondValid)}>
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
        <textarea {...secondRegister("introduction")} placeholder="한줄소개" />
      </div>
      <button>제출</button>
    </form>
  );
}
export default AddProfileForm;
