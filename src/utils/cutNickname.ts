const MAX_LENGTH = 6;

export default function cutNickname(nickname: string) {
  return nickname.length > MAX_LENGTH ? nickname.slice(0, 4) + '...' : nickname;
}
