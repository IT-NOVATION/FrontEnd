const MAX_REVIEW_LENGTH = 200;

function cutReviewText(text: string) {
  // 리뷰 미리보기 시 html 태그들을 자르고, 250자가 넘어가면 뒷부분을 자르고, '...'채우기
  if (text.replace(/<[^>]*>?/g, "").length > MAX_REVIEW_LENGTH) {
    return text
      .replace(/<[^>]*>?/g, "")
      .replace(/\n?/g, "")
      .replace(/&nbsp;/g, "")
      .slice(0, MAX_REVIEW_LENGTH)
      .concat("...");
  } else return text.replace(/<[^>]*>?/g, "");
}
export default cutReviewText;
