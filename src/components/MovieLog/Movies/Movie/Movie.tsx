import { IInterstedMovie } from "@interfaces/movies";
import * as S from "./style";
import { useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import cutMovieTitle from "@utils/cutMovieTitle";
import useCalcStar from "@hooks/useCalcStar";

function Movie({ movie }: { movie: IInterstedMovie }) {
    const [mouseEntered, setMouseEntered] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setMouseEntered(true);
    };
    const handleMouseLeave = () => {
        setMouseEntered(false);
    };
    const { fullStar, halfStar } = useCalcStar(movie.star);
    return (
        <S.MovieContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} img={movie.movieImg}>
            {mouseEntered && (
                <S.MovieInfoContainer>
                    <Text.Title4 color="darkWhite">{cutMovieTitle(movie.title)}</Text.Title4>
                    <Block.RowBox margin="10px 0 0 0">
                        {fullStar.map((v, i) => (
                            <img key={i} src="/icons/MovieLog/purple_star.svg" />
                        ))}
                        {halfStar.map((v, i) => (
                            <img key={i} src="/icons/MovieLog/purple_half_star.svg" />
                        ))}
                    </Block.RowBox>
                    <Block.RowBox margin="157px 0 0 0">
                        <S.MinusBtn>
                            <S.MinusBox />
                        </S.MinusBtn>
                        <Button.Button width="130px" height="50px" borderRadius="15px" bgColor="main">
                            <Text.Body3 color="white">리뷰 쓰기</Text.Body3>
                        </Button.Button>
                    </Block.RowBox>
                </S.MovieInfoContainer>
            )}
        </S.MovieContainer>
    );
}
export default Movie;
