import Badge from "@components/User/Badge/Badge";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block, Text, Button } from "@styles/UI";
import { useState } from "react";
import * as S from "./style";
import Movies from "@components/MovieLog/Movies/Movies";
import EditProfileModal from "@components/MovieLog/EditProfileModal/EditProfileModal";
import FollowModal from "@components/MovieLog/FollowModal/FollowModal";
import { IFollowUser } from "@interfaces/followUser";
import ReviewPreviews from "@components/ReviewPreviews/ReviewPreviews";

const User = {
    userProfile: {
        userId: 1,
        background: "https://cdn.pixabay.com/photo/2015/09/21/14/46/banner-949931_1280.jpg",
        nickname: "삼동맘",
        introduction: "퇴근 후 삼동이랑 영화보는 일상",
        grade: "VIP",
        profileImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
        followers: [
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
        ],
        following: [
            {
                userId: 2,
                nickname: "스탁벅스",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
            {
                userId: 3,
                nickname: "stakbucks",
                profileImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
            },
        ],
    },
    reviews: [
        {
            reviewId: 1,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>드디어 그들의 벽장 문이 열렸다! 애니메이션 <몬스터 주식회사>입니다. 독특한 세계관에서 독특한 소재를 활용하여 펼쳐지는 몬스터들의 활약이 인상적인 작품입니다. 2001년 작품이라는 것이 믿겨지지 않을 정도로 개성 강한 몬스터들과 어색함 없이 자연스러운 스토리 전개가 너무 좋았습니다. 그리고 뛰어난 그래픽까지 더해져 복잡하지 않은 스토리를 더 몰입하여 볼 수 있었습니다.





      이 애니메이션 <몬스터 주식회사>의 제목답게 몬스터들이 경영하는 회사가 주된 무대입니다. 이 회사는 특이한 사업을 하고 있는데 바로 인간 아이들의 비명소리를 수집하는 일입니다. 이 비명소리가 몬스터 세상의 주요 에너지 자원이라고 하는 설정인데 그렇게 생각하면 몬스터 세상의 에너지 회사인 것입니다. 그런 인간 어린 아이들의 비명소리를 모으는 방법은 몬스터가 직접 인간 아이들을 찾아가 무서운 표정이나 행동으로 놀래 켜서 비명을 지르게 하는 것입니다.
     
     
     
     
     
      몬스터 세상과 인간 세상이 분리 되어 있는데 인간 아이들을 놀라 키기 위해 인간 세상으로 가기 위해서는 각종 문으로 들어가 인간 아이들 방의 벽장을 통해 인간 세상으로 갈 수 있습니다. 갑자기 튀어나오는 몬스터들의 모습을 보고 대부분 비명을 지르는 인간 아이들의 소리를 들을 수 있습니다. 그런 일을 하는 주인공은 이 회사 최고의 스타이고 그런 주인공을 돕는 친구는 최고의 파트너입니다. 이 둘이 이 애니메이션 <몬스터 주식회사>를 이끌어가는 몬스터들이고 애니메이션 내내 최고의 호흡을 보여줍니다.
     
     
     
     
     
      이 애니메이션 <몬스터 주식회사>에는 많은 몬스터들이 등장하지만 주요 몬스터들은 몇 되지 않습니다. 하지만 적절한 비중과 역할 배분으로 스토리 전개에 딱 필요한 만큼의 몬스터들이 등장하는 것 같습니다. 소모성 짙은 몬스터도 없고 없어도 되는 몬스터도 없었습니다. 이 애니메이션이 진행되는데 딱 필요한 만큼의 역할을 가진 몬스터들과 주요 몬스터들의 호흡도 좋았고 그들이 펼치는 소동도 너무 좋았습니다.</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
        {
            reviewId: 2,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
        {
            reviewId: 3,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
        {
            reviewId: 4,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
        {
            reviewId: 5,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
        {
            reviewId: 6,
            reviewTitle: "기쁨은 공포보다 강하다",
            star: 4.5,
            reviewMainText: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
            createdDate: "2023.03.15",
            reviewLikeCount: 12,
            movie: {
                movieId: 1,
                movieImg:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            },
        },
    ],
    interestedMovies: [
        {
            movieId: 1,
            movieImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            star: 2.7,
            title: "가디언즈 오브 갤럭시 5",
            hasReviewed: false,
        },
        {
            movieId: 2,
            movieImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            star: 2.31,
            title: "가디언즈 오브 갤럭시 5",
            hasReviewed: false,
        },
        {
            movieId: 3,
            movieImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            star: 2.3,
            title: "가디언즈 오브 갤럭시 5",
            hasReviewed: false,
        },
        {
            movieId: 4,
            movieImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            star: 2.3,
            title: "가디언즈 오브 갤럭시 5",
            hasReviewed: false,
        },
        {
            movieId: 5,
            movieImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
            star: 2.3,
            title: "가디언즈 오브 갤럭시 5",
            hasReviewed: false,
        },
    ],
};

type ContentType = "Reviews" | "InterestedMovies";
export type FollowModalType = null | IFollowUser[];

function MovieLog() {
    // parameter에 담긴 유저 아이디를 통해 유저의 무비로그 서버에 요청..
    // 본인 무비로그인지 여부
    const [isOwnProfile, setIsOwnProfile] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [followModal, setFollowModal] = useState<FollowModalType>(null);

    const [contents, setContents] = useState<ContentType>("Reviews");

    const handleChangeContent = (to: ContentType) => {
        setContents(to);
    };
    const handleBgClick = () => {
        setIsEditing(false);
        setFollowModal(null);
    };
    const handleFollow = () => {};
    const handleButtonClick = () => {
        isOwnProfile ? setIsEditing(true) : handleFollow();
    };
    const handleFollowersClick = () => setFollowModal(User.userProfile.followers);
    const handleFollowingClick = () => setFollowModal(User.userProfile.following);

    return (
        <>
            {/* 팔로우/팔로잉 모달 */}
            {followModal && (
                <Block.ColumnBox
                    width="100vw"
                    height="100vh"
                    position="fixed"
                    justifyContent="center"
                    alignItems="center"
                    zIndex="2"
                >
                    <S.Background onClick={handleBgClick}></S.Background>
                    <FollowModal
                        initialState={followModal}
                        setFollowModal={setFollowModal}
                        followers={User.userProfile.followers}
                        following={User.userProfile.following}
                    />
                </Block.ColumnBox>
            )}
            {/* 프로필 편집 모달 */}
            {isEditing && (
                <Block.ColumnBox
                    width="100vw"
                    height="100vh"
                    position="fixed"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="bgColor"
                    zIndex="2"
                >
                    <S.Background onClick={handleBgClick}></S.Background>
                    <EditProfileModal setIsEditing={setIsEditing} userProfile={User.userProfile} />
                </Block.ColumnBox>
            )}
            {/* 커버 */}
            <Block.ColumnBox
                background={`url(${User.userProfile.background})`}
                width="100vw"
                height="196px"
            ></Block.ColumnBox>

            <Block.PageWrapper>
                <Block.PageLayout>
                    <Block.AbsoluteBox top="50px">
                        <ProfileImg size="208px" img={User.userProfile.profileImg} />
                    </Block.AbsoluteBox>
                    <Block.RowBox width="900px" margin="85px 0 0 0" alignItems="flex-end">
                        <Text.Title3 color="lightBlack" margin="0 16px 0 0">
                            {User.userProfile.nickname}
                        </Text.Title3>
                        <Text.Body1 color="lightBlack" margin="0 410px 0 0">
                            {User.userProfile.introduction}
                        </Text.Body1>
                        <Button.Button
                            width="94px"
                            height="33px"
                            border=" 1px solid #CCC"
                            borderRadius="16.5px"
                            bgColor="white"
                            onClick={handleButtonClick}
                        >
                            {isOwnProfile ? "프로필 편집" : "팔로우 하기"}
                        </Button.Button>
                    </Block.RowBox>
                    <Block.RowBox width="100%" margin="30px 0 0 0" alignItems="center">
                        <Badge grade="VIP" size="29px" />
                        <Block.RowBox
                            width="auto"
                            margin="0 0 0 12px"
                            alignItems="center"
                            pointer
                            onClick={handleFollowersClick}
                        >
                            <Text.Body4 color="lightBlack" margin="0 4px 0 0">
                                팔로워
                            </Text.Body4>
                            <Text.Body1 color="lightBlack" margin="0 4px 0 0">
                                {User.userProfile.followers.length}
                            </Text.Body1>
                        </Block.RowBox>
                        <Block.RowBox
                            width="auto"
                            margin="0 0 0 25px"
                            alignItems="center"
                            pointer
                            onClick={handleFollowingClick}
                        >
                            <Text.Body4 color="lightBlack" margin="0 4px 0 0">
                                팔로잉
                            </Text.Body4>
                            <Text.Body1 color="lightBlack" margin="0 4px 0 0">
                                {User.userProfile.following.length}
                            </Text.Body1>
                        </Block.RowBox>
                    </Block.RowBox>
                    {/* 리뷰 or 관심영화 */}
                    <Block.RowBox width="900px" margin="70px 0 0 0">
                        <S.ContentLabel
                            onClick={() => handleChangeContent("Reviews")}
                            selected={contents === "Reviews"}
                        >
                            <Text.Body1 color="lightBlack">리뷰</Text.Body1>
                            <Text.Body1 color="lightBlack" margin="4px">
                                17
                            </Text.Body1>
                        </S.ContentLabel>
                        <S.ContentLabel
                            onClick={() => handleChangeContent("InterestedMovies")}
                            selected={contents === "InterestedMovies"}
                        >
                            <Text.Body1 color="lightBlack">관심영화</Text.Body1>
                            <Text.Body1 color="lightBlack" margin="4px">
                                30
                            </Text.Body1>
                        </S.ContentLabel>
                    </Block.RowBox>
                    {contents === "Reviews" ? (
                        <ReviewPreviews reviews={User.reviews} width="900px" />
                    ) : (
                        <Block.RowBox margin="35px 0 70px 0" justifyContent="center" alignItems="center">
                            <Movies movies={User.interestedMovies} />
                        </Block.RowBox>
                    )}
                </Block.PageLayout>
            </Block.PageWrapper>
        </>
    );
}
export default MovieLog;
