const MAX_TITLE_LENGTH = 9;

function cutMovieTitle(title: string) {
  // 리뷰 미리보기 시 html 태그들을 자르고, 200자가 넘어가면 뒷부분을 자르고, '...'채우기
  if (title.length > MAX_TITLE_LENGTH) {
    return title.slice(0, MAX_TITLE_LENGTH).concat("...");
  } else return title;
}
export default cutMovieTitle;
