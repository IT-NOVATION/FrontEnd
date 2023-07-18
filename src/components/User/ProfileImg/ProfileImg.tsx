import * as S from "./style";

export type Props = {
  img?: string;
  size: string;
};

function ProfileImg({ img, size }: Props) {
  return (
    <S.ProfileImgContainer
      img={img ? img : "/images/default_profile.png"}
      size={size}
    />
  );
}
export default ProfileImg;
