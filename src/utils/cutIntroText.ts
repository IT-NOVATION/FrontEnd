export function cutIntroText(introduction: string) {
  return introduction.replace(/\n?/g, "").slice(0, 12).concat("...");
}

const MAX_MOVIE_TALK_INTRO_LINE_LENGTH = 24;
export function cutMovieTalkIntroText(introduction: string) {
  return introduction?.length > MAX_MOVIE_TALK_INTRO_LINE_LENGTH
    ? `${introduction.slice(
        0,
        MAX_MOVIE_TALK_INTRO_LINE_LENGTH
      )}\n${introduction.slice(MAX_MOVIE_TALK_INTRO_LINE_LENGTH)}`
    : introduction;
}
