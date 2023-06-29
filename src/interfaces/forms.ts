export interface IAccountInfo {
  email?: string;
  password?: string;
  verifyPassword?: string;
  nickname?: string;
  introduction?: string;
}
export interface IFindPassword {
  email: string;
  code?: string;
}
