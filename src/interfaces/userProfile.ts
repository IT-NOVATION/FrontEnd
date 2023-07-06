import { IFollowUser } from "./followUser";

export interface IUserProfile_EditProfileModal {
  userId: number;
  nickname: string;
  profileImg: string;
  background: string;
  introduction: string;
  grade: string;
  followers: IFollowUser[];
  following: IFollowUser[];
}
