export interface ISignupForm {
    user_name: string;
    password: string;
    verifyPassword: string;
    email: string;
    nickname: string;
    introduction: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}
