export interface IUserResult {
    userSearchResponseDtoList: IUserSearchResponseDtoList[];
    totalSize: number;
}

export interface IUserSearchResponseDtoList {
    userId: number;
    nickname: string;
    userImg: string;
    introduction: string;
    reviews: {
        reviewId: number;
        movieImg: string;
        reviewTitle: string;
    };
}
