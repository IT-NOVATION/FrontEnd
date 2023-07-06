import * as S from "./style";

export type Props = {
  img: string;
  size: string;
};

function ProfileImg({ img, size }: Props) {
  return <S.ProfileImgContainer img={img} size={size}></S.ProfileImgContainer>;
}
export default ProfileImg;
