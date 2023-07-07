import * as S from "./style";

export type Props = {
  grade: "STANDARD" | "PREMIUM" | "VIP" | "SPECIAL";
  size: string;
};
function Badge({ grade, size }: Props) {
  return (
    <S.BadgeContainer grade={grade} size={size}>
      <S.BadgeText>{grade}</S.BadgeText>
    </S.BadgeContainer>
  );
}

export default Badge;
