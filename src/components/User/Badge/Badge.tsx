import { Grade } from "@interfaces/user";
import * as S from "./style";

function Badge({ grade }: { grade: Grade }) {
  return <S.BadgeContainer src={`/icons/Badge/${grade}.svg`} />;
}

export default Badge;
