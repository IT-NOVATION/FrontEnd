import * as S from "./style";
import { ReadReviewApi } from "@apis/readReviewApi";
import { IComments } from "@interfaces/comments";
import { Block, Text } from "@styles/UI";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment/Comment";
import { ILoginState } from "@interfaces/loginState";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import theme from "@styles/theme";

export default function Comments({ reviewId }: { reviewId: number }) {
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const {
    data: commentsData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<IComments>({
    queryKey: ["comments", reviewId],
    queryFn: async ({ pageParam = 1 }) =>
      await ReadReviewApi.getComments(reviewId, pageParam),
    getNextPageParam: ({ nowPage, lastPage }) => {
      if (nowPage === lastPage) {
        return false;
      }
      return nowPage + 1;
    },
  });

  const handlePrevCommentsClick = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <>
      <Block.ColumnBox margin="13px 0 0 0">
        <Block.RowBox>
          <Text.Body4 margin="0 0 0 3px" color="lightBlack">
            댓글 21
          </Text.Body4>
        </Block.RowBox>
        {hasNextPage && (
          <S.PrevCommentsBox>
            <S.PrevCommentsText onClick={handlePrevCommentsClick}>
              이전 댓글 보기
            </S.PrevCommentsText>
          </S.PrevCommentsBox>
        )}
        {commentsData?.pages[0].commentList.map((v) => (
          <Comment key={v.commentId} comment={v} />
        ))}

        <Block.ColumnBox
          margin="44px 0 0 0"
          width="auto"
          height="301px"
          position="relative"
          border={`1px solid ${theme.colors.lightGray}`}
          borderRadius="20px"
          padding="70px 22px 38px 22px"
        >
          {loginState?.loginState && (
            <Block.AbsoluteBox left="0" top="13px">
              <Block.RowBox padding="0 13px" alignItems="center">
                <ProfileImg img={loginState.profileImg as string} size="39px" />
                <Text.Title5 margin="0 0 0 5px">
                  {loginState.nickname}
                </Text.Title5>
              </Block.RowBox>
            </Block.AbsoluteBox>
          )}
          <S.CommentInput
            placeholder="댓글을 자유롭게 입력해주세요"
            spellCheck={false}
          />
          <Block.AbsoluteBox width="auto" bottom="20px" right="35px">
            <Block.RowBox alignItems="center">
              <Text.Body7 color="lightGray" margin="0 12px 0 0">
                0/500
              </Text.Body7>
              <S.Icon src="/icons/ReadReview/up_arrow.svg" />
            </Block.RowBox>
          </Block.AbsoluteBox>
        </Block.ColumnBox>
      </Block.ColumnBox>
    </>
  );
}
