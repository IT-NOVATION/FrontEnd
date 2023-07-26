const MAX_TITLE_LENGTH = 14;

function cutReviewTitle(title: string) {
  return title.length > MAX_TITLE_LENGTH ? `${title.slice(0, 14)}..` : title;
}
export default cutReviewTitle;
