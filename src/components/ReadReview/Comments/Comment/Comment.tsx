import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import * as S from "./style";
import { IComment } from "@interfaces/comments";
import { Block, Text } from "@styles/UI";

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  return (
    <S.CommentBox>
      <Block.RowBox alignItems="center">
        <ProfileImg img="/images/default_profile.png" size="40px" />
        <Text.Body7 margin="0 0 0 7px" color="lightBlack">
          황태환
        </Text.Body7>
        <Text.Body5 margin="0 0 0 11px" color="darkGray">
          {comment.createDate}
        </Text.Body5>
      </Block.RowBox>
      <Block.RowBox margin="10px 0 0 0">
        <S.CommentText>{comment.commentText}</S.CommentText>
      </Block.RowBox>
    </S.CommentBox>
  );
}
