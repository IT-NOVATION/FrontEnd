import * as S from "./style";
import { IComment } from "@interfaces/comments";
import Comment from "../Comment/Comment";

type Props = {
  commentPage: IComment[];
};
export default function CommentPage({ commentPage }: Props) {
  return (
    <S.PageLayout
      initial={{ y: 100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {[...commentPage].reverse().map((v2) => (
        <Comment key={v2.commentId} comment={v2} />
      ))}
    </S.PageLayout>
  );
}
