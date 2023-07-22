import { ReadReviewApi } from "@apis/readReviewApi";
import * as S from "./style";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { ILoginState } from "@interfaces/loginState";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";
import { Block, Text } from "@styles/UI";
import theme from "@styles/theme";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";

const MAX_COMMENT_LENGTH = 500;

export default function CommentInput() {
  const { reviewId } = useParams();
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const setModalState = useSetRecoilState<ModalState>(modalStateAtom);
  const [value, setValue] = useState("");
  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleBoxClick = () => {
    !loginState?.loginState && setModalState(ModalState.LoginForm);
  };
  const handleMaxLengthOver = () => {
    alert("댓글 500자 이내로 작성 부탁드립니다.");
  };
  const handleMutateComment = async () => {
    if (value.length > MAX_COMMENT_LENGTH) {
      return handleMaxLengthOver();
    }
    if (loginState?.loginState) {
      try {
        await ReadReviewApi.mutateComment({
          reviewId: Number(reviewId),
          commentText: value,
        });
        await queryClient.invalidateQueries(["comments", Number(reviewId)]);
        setValue("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Block.ColumnBox
      margin="44px 0 0 0"
      width="auto"
      height="200px"
      position="relative"
      border={`1px solid ${theme.colors.lightGray}`}
      borderRadius="20px"
      padding="0px 22px 60px 22px"
      onClick={handleBoxClick}
    >
      {loginState?.loginState && (
        <Block.RowBox margin="13px 0 0 0" alignItems="center">
          <ProfileImg img={loginState.profileImg as string} size="39px" />
          <Text.Title5 margin="0 0 0 5px">{loginState.nickname}</Text.Title5>
        </Block.RowBox>
      )}
      <S.CommentInput
        value={value}
        onChange={handleValueChange}
        placeholder={
          loginState?.loginState
            ? "댓글을 자유롭게 입력해주세요"
            : "잇츠무비타임에 로그인하고 댓글을 입력해보세요!"
        }
        disabled={!loginState?.loginState}
        spellCheck={false}
      />
      <Block.AbsoluteBox width="auto" bottom="20px" right="35px">
        <Block.RowBox alignItems="center">
          <Text.Body7 color="lightGray" margin="0 12px 0 0">
            {value.length}/{MAX_COMMENT_LENGTH}
          </Text.Body7>
          <S.Icon
            disabled={!loginState?.loginState}
            src="/icons/ReadReview/up_arrow.svg"
            onClick={handleMutateComment}
          />
        </Block.RowBox>
      </Block.AbsoluteBox>
    </Block.ColumnBox>
  );
}
