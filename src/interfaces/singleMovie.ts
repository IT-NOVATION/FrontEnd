export interface ISingleMovie extends IMovieInformation {
    movie: IMovieInformation[];
    movieLikeCount: number;
    avgStarScore: number;
}

export interface IMovieInformation extends ITop3HasFeature {
    movieImg?: string;
    title: string;
    movieBgImg: string;
    movieGenre: string;
    movieReleasedate: string;
    movieRunningTime: number;
    movieActor: string;
    movieOverview: []; // 확인 필요
    movieDirector: string;
    movieDetail: string;
    top3HasFeature: {
        top1feature: string;
        top2feature: string;
        top3feature: string;
    };
}

export interface ITop3HasFeature {
    top1feature: string;
    top2feature: string;
    top3feature: string;
}

//

export interface IReviewAndUserInfoList extends IReview, IUser {
    review: IReview[];
    user: IUser[];
}

export interface IReview {
    reviewId: number;
    hasSpoiler: boolean;
    reviewTitle: string;
    reviewMainText: string;
    createdDate: Date;
    starScore: number;
    reviewLikeCount: number;
}

export interface IUser {
    userId: number;
    nickname: string;
    userProfileImg: string;
}

//

export interface IReviewCount {
    reviewCount: number;
}
