import { Block, Text } from "@styles/UI";
import * as S from "./style";

const INSTAGRAM_URL =
  "https://instagram.com/movie_time_729?igshid=ZDc4ODBmNjlmNQ== ";
const KAKAO_URL = "https://pf.kakao.com/_xlglqG";
const NAVER_URL = "https://blog.naver.com/its_movie_time";

export default function Footer() {
  const handleInstagramClick = () => {
    window.location.href = INSTAGRAM_URL;
  };
  const handleKakaoClick = () => {
    window.location.href = KAKAO_URL;
  };
  const handleNaverClick = () => {
    window.location.href = NAVER_URL;
  };
  return (
    <S.FooterLayout>
      <S.FooterBox>
        <Block.RowBox width="auto">
          <S.LogoBox>
            <S.Logo src="/icons/Footer/logo.svg" />
          </S.LogoBox>
          <Block.ColumnBox
            margin="0 0 0 24px"
            width="auto"
            justifyContent="space-between"
          >
            <Block.RowBox
              width="auto"
              gap="27px"
              justifyContent="space-between"
            >
              <S.Text>이용약관</S.Text>
              <S.Text>개인정보처리방침</S.Text>
              <S.Text>ITNOVATION</S.Text>
            </Block.RowBox>
            <Block.RowBox width="auto">
              <S.Text>© IT’s MOVIE TIME. All right reserved</S.Text>
            </Block.RowBox>
          </Block.ColumnBox>
        </Block.RowBox>
        <Block.ColumnBox
          width="198px"
          height="44px"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Block.RowBox width="100%" gap="8px" justifyContent="flex-end">
            <S.SNSIcon
              onClick={handleInstagramClick}
              src="/icons/Footer/instagram.svg"
            />
            <S.SNSIcon
              onClick={handleKakaoClick}
              src="/icons/Footer/kakao.svg"
            />
            <S.SNSIcon
              onClick={handleNaverClick}
              src="/icons/Footer/naver.svg"
            />
          </Block.RowBox>
          <Block.RowBox width="auto" gap="9px">
            <S.Text>Contact</S.Text>
            <S.Text>itsmovietime.co@gmail.com </S.Text>
          </Block.RowBox>
        </Block.ColumnBox>
      </S.FooterBox>
    </S.FooterLayout>
  );
}
