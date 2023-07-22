export interface IComments {
  lastPage: number;
  firstPage: number;
  nowPage: number;
  commentList: IComment[];
}

export interface IComment {
  commentId: number;
  commentText: string;
  createDate: string;
}
