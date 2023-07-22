import { Block, Button, Text } from "@styles/UI";
import theme from "@styles/theme";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsCancelModalOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CancelModal({ setIsCancelModalOn }: Props) {
  const navigate = useNavigate();
  const handleStopClick = () => {
    navigate(-1);
  };
  const handleKeepWritingClick = () => {
    setIsCancelModalOn(false);
  };
  return (
    <Block.ModalLayout>
      <Block.ModalBox>
        <Block.ColumnBox width="184px" height="46px" alignItems="center">
          <Text.Body4 color="lightBlack" lineHeight="150%">
            작성중인 내용이 삭제됩니다.
          </Text.Body4>
          <Text.Body4 color="lightBlack" lineHeight="150%">
            리뷰 작성을 그만하시겠습니까?
          </Text.Body4>
        </Block.ColumnBox>
        <Block.RowBox margin="30px 0 0 0" width="auto" gap="27px">
          <Button.Button
            width="164px"
            height="33px"
            borderRadius="4px"
            bgColor="white"
            border={`1px solid ${theme.colors.lightGray}`}
            onClick={handleStopClick}
          >
            <Text.Body4 color="darkGray">그만하기</Text.Body4>
          </Button.Button>
          <Button.Button
            width="164px"
            height="33px"
            borderRadius="4px"
            bgColor="main"
            border={`1px solid ${theme.colors.main}`}
            onClick={handleKeepWritingClick}
          >
            <Text.Body4 color="white">계속 리뷰 쓰기</Text.Body4>
          </Button.Button>
        </Block.RowBox>
      </Block.ModalBox>
    </Block.ModalLayout>
  );
}
