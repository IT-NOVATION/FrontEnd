import * as S from "./style";
import { ReadReviewApi } from "@apis/readReviewApi";
import { IComments } from "@interfaces/comments";
import { Block, Text } from "@styles/UI";
import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Comment from "./Comment/Comment";
import CommentInput from "./CommentInput/CommentInput";
import CommentPage from "./CommentPage/CommentPage";
import { useEffect, useState } from "react";

export default function Comments({ reviewId }: { reviewId: number }) {
  const queryClient = useQueryClient();
  const [scrollLoc, setScrollLoc] = useState(window.scrollY);
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<IComments>({
    queryKey: ["comments", reviewId],
    queryFn: ({ pageParam = 1 }) =>
      ReadReviewApi.getComments(reviewId, pageParam),
    select: ({ pages, pageParams }: InfiniteData<IComments>) => ({
      pageParams: [...pageParams].reverse(),
      pages: [...pages].reverse(),
    }),

    getNextPageParam: ({ nowPage, lastPage }) => {
      if (nowPage === lastPage) {
        return false;
      }
      return nowPage + 1;
    },
  });

  const handlePrevCommentsClick = async () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      <Block.ColumnBox margin="13px 0 0 0">
        <Block.RowBox margin="0 0 10px 0">
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
        {data?.pages.map((page, i) => (
          <CommentPage key={page.nowPage} commentPage={page.commentList} />
        ))}
        <CommentInput />
      </Block.ColumnBox>
    </>
  );
}
