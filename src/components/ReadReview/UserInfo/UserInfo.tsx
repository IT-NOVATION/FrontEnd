import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import * as S from "./style";
import { IReadReviewUser } from "@interfaces/user";
import { Block, Text } from "@styles/UI";
import Badge from "@components/User/Badge/Badge";
import { useNavigate } from "react-router-dom";

export default function UserInfo({ user }: { user: IReadReviewUser }) {
  const navigate = useNavigate();
  const handleNicknameClick = () => {
    navigate(`/movieLog/${user.userId}`);
  };
  return (
    <S.Layout>
      <S.Banner img={user.bgImg}>
        <Block.ColumnBox position="relative" width="900px" height="100%">
          <Block.AbsoluteBox width="auto" top="-38px" right="0">
            <ProfileImg img={user.profileImg} size="130px" />
          </Block.AbsoluteBox>
          <Block.RowBox margin="45px 0 0 0" alignItems="center">
            <Text.Title2
              onClick={handleNicknameClick}
              pointer
              margin="0 20px 0 0"
              color="lightBlack"
            >
              {user.nickname}
            </Text.Title2>
            <Badge grade={user.grade} />
          </Block.RowBox>
          <Block.RowBox margin="12px 0 0 0">
            <Text.Body4 margin="0 0 0 5px" color="lightBlack">
              {user.introduction}
            </Text.Body4>
          </Block.RowBox>
          <Block.RowBox margin="32px 0 0 0" alignItems="center">
            <Text.Body4 color="lightBlack" margin="0 6px 0 0">
              팔로워
            </Text.Body4>
            <Text.Body1 color="lightBlack" margin="0 19px 0 0">
              {user.followerNum}
            </Text.Body1>
            <Text.Body4 color="lightBlack" margin="0 6px 0 0">
              팔로잉
            </Text.Body4>
            <Text.Body1 color="lightBlack" margin="0 19px 0 0">
              {user.followingNum}
            </Text.Body1>
          </Block.RowBox>
        </Block.ColumnBox>
      </S.Banner>
    </S.Layout>
  );
}
