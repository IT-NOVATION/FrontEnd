import { Block } from "@styles/UI";
import * as S from "./style";

function Loading() {
  return (
    <Block.RowBox width="100vw" justifyContent="center">
      {Array(5)
        .fill(0)
        .map(() => (
          <S.PosterOutline />
        ))}
    </Block.RowBox>
  );
}
export default Loading;
