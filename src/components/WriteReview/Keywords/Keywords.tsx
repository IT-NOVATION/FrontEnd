import { Block, Text } from "@styles/UI";
import KeywordBox from "./KeywordBox/KeywordBox";
import { useContext, useEffect, useState } from "react";
import { ReviewDataContext } from "@pages/WriteReview/WriteReview";

enum KeywordsEnum {
  "스토리가 좋아요",
  "작품성이 높아요",
  "시나리오 소재가 참신해요",
  "연출력이 좋아요!",
  "OST가 좋아요",
  "영상미가 아름다워요",
  "배우들의 연기가 훌륭해요",
  "캐릭터가 매력적이에요",
  "대사 전달이 정확해요",
}

function Keywords() {
  const reviewDataContext = useContext(ReviewDataContext);
  const [selected, setSelected] = useState(Array(9).fill(false));
  useEffect(() => {
    reviewDataContext?.setReviewData((prev) => {
      return {
        ...prev,
        hasGoodStory: selected[0],
        hasGoodProduction: selected[1],
        hasGoodScenario: selected[2],
        hasGoodDirecting: selected[3],
        hasGoodOst: selected[4],
        hasGoodVisual: selected[5],
        hasGoodActing: selected[6],
        hasGoodCharterCharming: selected[7],
        hasGoodDiction: selected[8],
      };
    });
  }, [selected]);

  return (
    <Block.RowBox margin="10px 0 0 0">
      <Block.ColumnBox width="183px" margin="0 36px 0 0">
        <Text.Body4 margin="0 0 7px 0">스토리</Text.Body4>
        <KeywordBox
          selected={selected[0]}
          setSelected={setSelected}
          width="142px"
          text={KeywordsEnum[0]}
          index={0}
        />
        <KeywordBox
          selected={selected[1]}
          setSelected={setSelected}
          width="142px"
          text={KeywordsEnum[1]}
          index={1}
        />
        <KeywordBox
          selected={selected[2]}
          setSelected={setSelected}
          width="183px"
          text={KeywordsEnum[2]}
          index={2}
        />
      </Block.ColumnBox>
      <Block.ColumnBox width="162px" margin="0 41px 0 0">
        <Text.Body4 margin="0 0 7px 0">연출</Text.Body4>
        <KeywordBox
          selected={selected[3]}
          setSelected={setSelected}
          width="142px"
          text={KeywordsEnum[3]}
          index={3}
        />
        <KeywordBox
          selected={selected[4]}
          setSelected={setSelected}
          width="124px"
          text={KeywordsEnum[4]}
          index={4}
        />
        <KeywordBox
          selected={selected[5]}
          setSelected={setSelected}
          width="162px"
          text={KeywordsEnum[5]}
          index={5}
        />
      </Block.ColumnBox>
      <Block.ColumnBox width="166px">
        <Text.Body4 margin="0 0 7px 0">연기</Text.Body4>
        <KeywordBox
          selected={selected[6]}
          setSelected={setSelected}
          width="189px"
          text={KeywordsEnum[6]}
          index={6}
        />
        <KeywordBox
          selected={selected[7]}
          setSelected={setSelected}
          width="175px"
          text={KeywordsEnum[7]}
          index={7}
        />
        <KeywordBox
          selected={selected[8]}
          setSelected={setSelected}
          width="166px"
          text={KeywordsEnum[8]}
          index={8}
        />
      </Block.ColumnBox>
    </Block.RowBox>
  );
}
export default Keywords;
