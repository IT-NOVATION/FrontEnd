import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import * as S from "./style";
import { IComment } from "@interfaces/comments";
import { Block, Text } from "@styles/UI";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginState } from "@interfaces/loginState";
import { ReadReviewApi } from "@apis/readReviewApi";

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const handleNicknameClick = (userId: number) => {
    navigate(`/movieLog/${userId}`);
  };
  const handleDeleteClick = async () => {
    await ReadReviewApi.deleteComment(comment.commentId);
    await queryClient.invalidateQueries(["comments", Number(reviewId)]);
  };
  return (
    <S.CommentBox
      isMyComment={loginState?.userId === comment.commentUserInfo.userId}
    >
      {loginState?.userId === comment.commentUserInfo.userId && (
        <S.DeleteBtn onClick={handleDeleteClick}>삭제</S.DeleteBtn>
      )}
      <Block.RowBox alignItems="center">
        <ProfileImg img={comment.commentUserInfo.profileImg} size="40px" />
        <Text.Body7
          onClick={() => handleNicknameClick(comment.commentUserInfo.userId)}
          margin="0 0 0 7px"
          color="lightBlack"
          pointer
        >
          {comment.commentUserInfo.nickname}
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
