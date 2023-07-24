export interface IUserResult {
    userSearchResponseDtoList: {
        userId: number;
        nickname: string;
        userImg: string;
        introduction: string;
        reviews: {
            reviewId: number;
            movieImg: string;
            reviewTitle: string;
        };
    };
    totalSize: number;
}
