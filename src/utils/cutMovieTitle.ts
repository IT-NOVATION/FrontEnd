const MAX_TITLE_LENGTH = 9;

function cutMovieTitle(title: string) {
  if (title.length > MAX_TITLE_LENGTH) {
    return title.slice(0, MAX_TITLE_LENGTH).concat("...");
  } else return title;
}
export default cutMovieTitle;
