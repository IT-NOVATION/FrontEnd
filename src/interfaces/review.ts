export interface IReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  movie: {
    movieId: number;
    movieImg: string;
  };
}

export interface IMutateReview {
  movieId: number;
  star: number;
  reviewTitle: string;
  reviewMainText: string;
  hasGoodStory: boolean;
  hasGoodProduction: boolean;
  hasGoodScenario: boolean;
  hasGoodDirecting: boolean;
  hasGoodOst: boolean;
  hasGoodVisual: boolean;
  hasGoodActing: boolean;
  hasGoodCharterCharming: boolean;
  hasGoodDiction: boolean;
  hasCheckDate: boolean;
  hasSpoiler: boolean;
  watchDate: string;
}
