import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import * as S from "./style";
import { IComment } from "@interfaces/comments";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginState } from "@interfaces/loginState";
import { ReadReviewApi } from "@apis/readReviewApi";
import { useState } from "react";
import theme from "@styles/theme";

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);

  const handleNicknameClick = (userId: number) => {
    navigate(`/movieLog/${userId}`);
  };
  const handleDeleteClick = async () => {
    setIsDeleteModalOn(true);
  };
  const handleCancelClick = () => {
    setIsDeleteModalOn(false);
  };
  const handleDeleteConfirm = async () => {
    await ReadReviewApi.deleteComment(comment.commentId);
    await queryClient.invalidateQueries(["comments", Number(reviewId)]);
    setIsDeleteModalOn(false);
  };
  return (
    <>
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
      {isDeleteModalOn && (
        <Block.ModalLayout>
          <Block.ModalBox width="301px" height="131px">
            <Block.ColumnBox width="184px" height="46px" alignItems="center">
              <Text.Body4 color="lightBlack" lineHeight="150%">
                댓글을 삭제하시겠습니까?
              </Text.Body4>
            </Block.ColumnBox>
            <Block.RowBox width="auto" gap="27px">
              <Button.Button
                width="103px"
                height="33px"
                borderRadius="4px"
                bgColor="white"
                border={`1px solid ${theme.colors.lightGray}`}
                onClick={handleCancelClick}
              >
                <Text.Body4 color="darkGray">취소</Text.Body4>
              </Button.Button>
              <Button.Button
                width="103px"
                height="33px"
                borderRadius="4px"
                bgColor="main"
                border={`1px solid ${theme.colors.main}`}
                onClick={handleDeleteConfirm}
              >
                <Text.Body4 color="white">확인</Text.Body4>
              </Button.Button>
            </Block.RowBox>
          </Block.ModalBox>
        </Block.ModalLayout>
      )}
    </>
  );
}
