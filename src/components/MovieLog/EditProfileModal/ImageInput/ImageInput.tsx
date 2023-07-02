import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block } from "@styles/UI";
import theme from "@styles/theme";
import AWS from "aws-sdk";
import * as S from "./style";
import useUploadImg from "@hooks/useUploadImg";

type Props = {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
};

function ImageInput({ img, setImg }: Props) {
  const uploadImg = useUploadImg(setImg);
  return (
    <Block.ColumnBox width="auto" position="relative">
      <ProfileImg img={img} size="70px" />
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
