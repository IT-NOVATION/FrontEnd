export function cutIntroText(introduction: string) {
  return introduction.replace(/\n?/g, "").slice(0, 12).concat("...");
}
