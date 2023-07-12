import { Block, Text } from "@styles/UI";
import * as S from "./style";

export default function IndividualMovie() {
    return (
        <Block.ColumnBox width="100vw">
            {/* 배경 */}
            <Block.RowBox width="100%" height="535px" padding="85px 0 0 0" bgColor="black">
                <Block.ColumnBox>
                    <img src="" alt="포스터" />
                </Block.ColumnBox>

                <Block.ColumnBox>
                    <Block.ColumnBox>
                        <Text.Body1>제목</Text.Body1>
                        <Block.RowBox>하트</Block.RowBox>
                        <Block.RowBox>별점</Block.RowBox>
                    </Block.ColumnBox>

                    <Block.ColumnBox>
                        <Block.RowBox>정보박스</Block.RowBox>
                        <Block.RowBox>#태그 보여주는 부분</Block.RowBox>
                    </Block.ColumnBox>
                </Block.ColumnBox>
            </Block.RowBox>
            {/* 리뷰 정보 */}
            <Block.ColumnBox alignItems="center">
                <Text.Body1>리뷰 ({}개)</Text.Body1>
                <Block.RowBox
                    width="882px"
                    height="91px"
                    borderRadius="13px"
                    border="1px solid rgba(154, 154, 154, 0.75)"
                >
                    <Text.Body1>별 모양 가져오기</Text.Body1>
                    <S.Button>
                        <img src="" alt="연필" />

                        <Text.Body1>리뷰작성</Text.Body1>
                    </S.Button>
                </Block.RowBox>

                <Text.Body1>리뷰 컴포넌트 가져오기</Text.Body1>
            </Block.ColumnBox>
        </Block.ColumnBox>
    );
}
