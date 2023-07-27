import * as S from "./style";
export default function Loading() {
  return (
    <>
      {Array(16)
        .fill(0)
        .map(() => (
          <S.Poster />
        ))}
    </>
  );
}
