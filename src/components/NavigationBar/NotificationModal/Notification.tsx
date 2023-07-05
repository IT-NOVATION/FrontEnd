import { Block, Text } from "@styles/UI";
import * as S from "./style";

// type Notification = "FOLLOW" | "LIKE" | "COMMENT";

export default function Notification() {
    return (
        <>
            <Block.RowBox width="100%" justifyContent="space-evenly" alignItems="center" margin="0 0 30px 0">
                <S.ProfileImg src="/icons/default-profile.svg" alt="profile" />
                <Block.RowBox width="186px">
                    <Text.Body5> 삼동맘님이 회원님이 작성한 영화 리뷰에 댓글을 남겼습니다.</Text.Body5>
                    <Text.Body5> 20시간 </Text.Body5>
                </Block.RowBox>
                <S.FollowBtn>팔로잉</S.FollowBtn>
            </Block.RowBox>

            <Block.RowBox width="100%" justifyContent="space-evenly" alignItems="center" margin="0 0 30px 0">
                <S.ProfileImg src="/icons/default-profile.svg" alt="profile" />
                <Block.RowBox width="186px">
                    <Text.Body5> 가마니님이 회원님을 팔로우하기 시작했습니다.</Text.Body5>
                    <Text.Body5> 3일 </Text.Body5>
                </Block.RowBox>
                <S.FollowBtn>팔로우</S.FollowBtn>
            </Block.RowBox>

            <Block.RowBox width="100%" justifyContent="space-evenly" alignItems="center" margin="0 0 30px 0">
                <S.ProfileImg src="/icons/default-profile.svg" alt="profile" />
                <Block.RowBox width="186px">
                    <Text.Body5> 오늘부터다이어트님이 회원님이 작성한 영화 리뷰를 좋아합니다.</Text.Body5>
                    <Text.Body5> 4일 </Text.Body5>
                </Block.RowBox>
                <S.FollowBtn>팔로우</S.FollowBtn>
            </Block.RowBox>

            <Block.RowBox width="100%" justifyContent="space-evenly" margin="0 0 30px 0">
                <S.ProfileImg src="/icons/default-profile.svg" alt="profile" />
                <Block.RowBox width="186px">
                    <Text.Body5> 가가강님이 회원님을 팔로우하기 시작했습니다.</Text.Body5>
                    <Text.Body5> 4일 </Text.Body5>
                </Block.RowBox>
                <S.FollowBtn>팔로우</S.FollowBtn>
            </Block.RowBox>

            {/* {Notification === "COMMENT" && (
                <Text.Body1> 삼동맘님이 회원님이 작성한 영화 리뷰에 댓글을 남겼습니다.</Text.Body1>
            )}
            {Notification === "FOLLOW" && <Text.Body1> 이동맘님이 회원님을 팔로우하기 시작했습니다.</Text.Body1>}
            {Notification === "LIKE" && <Text.Body1> 일동맘님이 회원님이 작성한 영화 리뷰를 좋아합니다.</Text.Body1>} */}
        </>
    );
}
