function useCutReviewText(text: string) {
  // 리뷰 미리보기 시 html 태그들을 자르고, 300자가 넘어가면 뒷부분을 자르고, '...'채우기
  if (text.replace(/<[^>]*>?/g, "").length > 300) {
    return text
      .replace(/<[^>]*>?/g, "")
      .slice(0, 300)
      .concat("...");
  } else return text.replace(/<[^>]*>?/g, "");
}
export default useCutReviewText;
