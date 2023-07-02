import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block } from "@styles/UI";
import theme from "@styles/theme";
import * as S from "./style";
import useUploadImg from "@hooks/useUploadImg";
import BgImg from "@components/User/BgImg/BgImg";

type Props = {
  type: "profileImg" | "bgImg";
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
};

function ImageInput({ type, img, setImg }: Props) {
  const uploadImg = useUploadImg(setImg);
  return (
    <Block.ColumnBox width="auto" position="relative">
      {type === "profileImg" ? (
        <ProfileImg img={img} size="70px" />
      ) : (
        <BgImg img={img} />
      )}
      <S.Label htmlFor={img}>
        <Block.ColumnBox
          width="23px"
          height="23px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${theme.colors.gray}`}
          borderRadius="50%"
          bgColor="white"
        >
          <S.CameraIcon src="/icons/camera.svg" />
        </Block.ColumnBox>
      </S.Label>
      <S.Input type="file" accept="image/*" onChange={uploadImg} id={img} />
    </Block.ColumnBox>
  );
}
export default ImageInput;
