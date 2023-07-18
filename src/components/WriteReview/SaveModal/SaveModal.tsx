import { Block, Button, Text } from "@styles/UI";
import theme from "@styles/theme";

type Props = {
  reviewId: boolean | string;
};

export default function SaveModal({ reviewId }: Props) {
  const handleConfirmClick = () => {
    window.location.href = `/review/${reviewId}`;
  };
  return (
    <Block.ModalLayout>
      <Block.ModalBox>
        <Block.ColumnBox width="184px" height="46px" alignItems="center">
          <Text.Body4 color="lightBlack" lineHeight="150%">
            리뷰가 저장되었습니다.
          </Text.Body4>
          <Text.Body4 color="lightBlack" lineHeight="150%">
            완성된 리뷰를 확인해보세요!
          </Text.Body4>
        </Block.ColumnBox>
        <Block.RowBox margin="30px 0 0 0" width="auto">
          <Button.Button
            width="164px"
            height="33px"
            borderRadius="4px"
            bgColor="main"
            border={`1px solid ${theme.colors.main}`}
            onClick={handleConfirmClick}
          >
            <Text.Body4 color="white">확인</Text.Body4>
          </Button.Button>
        </Block.RowBox>
      </Block.ModalBox>
    </Block.ModalLayout>
  );
}
