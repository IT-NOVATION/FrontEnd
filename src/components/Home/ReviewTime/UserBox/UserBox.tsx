import { Block, Text, Button } from "@styles/UI";
import * as S from "./style";
import { IReviewTimeUser } from "@interfaces/user";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import Badge from "@components/User/Badge/Badge";
import ReviewPreviews from "@components/ReviewPreviews/ReviewPreviews";
import { cutIntroText } from "@utils/cutIntroText";
import { useNavigate } from "react-router-dom";
import FollowBtn from "@components/FollowBtn/FollowBtn";
import useLoginState from "@hooks/useLoginState";
import { ILoginState } from "@interfaces/loginState";

function UserBox({ user }: { user: IReviewTimeUser }) {
  const { loginState, userId }: ILoginState = useLoginState();
  const navigate = useNavigate();
  const handleNicknameClick = () => {
    navigate(`/movieLog/${user.userId}`);
  };
  return (
    <S.Box>
      <Block.ColumnBox
        width="185px"
        margin="118px 0 0 44px"
        alignItems="center"
      >
        <ProfileImg size="131px" img={user.profileImg} />
        <Block.RowBox
          margin="10px 0 0 0"
          justifyContent="center"
          position="relative"
        >
          <S.NicknameBox onClick={handleNicknameClick}>
            {user.nickName}
            <Block.AbsoluteBox width="auto" top="-7px" right="-39px">
              <Badge grade={user.grade} />
            </Block.AbsoluteBox>
          </S.NicknameBox>
        </Block.RowBox>
        <Block.RowBox margin="13px 0 0 0" justifyContent="center">
          <Text.Body4 color="lightBlack">
            {user.introduction && cutIntroText(user.introduction)}
          </Text.Body4>
        </Block.RowBox>
        <Block.RowBox margin="42px 0 0 0" justifyContent="center">
          <Block.ColumnBox alignItems="center">
            <Text.Body4>팔로워</Text.Body4>
            <Text.Body4 margin="2px 0 0 0">{user.followers}</Text.Body4>
          </Block.ColumnBox>
          <Block.ColumnBox alignItems="center">
            <Text.Body4>팔로잉</Text.Body4>
            <Text.Body4 margin="2px 0 0 0">{user.followings}</Text.Body4>
          </Block.ColumnBox>
        </Block.RowBox>
        <Block.RowBox margin="46px 0 0 0" justifyContent="center">
          {userId !== user.userId && (
            <FollowBtn
              isFollowing={user.isLoginedUserFollowsNowUser}
              userId={String(user.userId)}
            />
          )}
        </Block.RowBox>
      </Block.ColumnBox>
      <Block.ColumnBox width="840px" margin="37px 0 0 36px">
        <ReviewPreviews reviews={user.reviews} width="820px" />
      </Block.ColumnBox>
    </S.Box>
  );
}
export default UserBox;
