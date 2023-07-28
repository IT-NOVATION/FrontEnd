import { Block } from "@styles/UI";
import * as S from "./style";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SingleMovieApi } from "@apis/singleMovieApi";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "@recoil/modalAtom";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginState } from "@interfaces/loginState";

type Props = {
  avgStarScore: number;
};

function StarRating({ avgStarScore }: Props) {
  const { movieId } = useParams();

  const setModalState = useSetRecoilState(modalStateAtom);

  const [score, setScore] = useState<number>(avgStarScore);
  const [scoreFixed, setScoreFixed] = useState(score);

  const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5);
  const handleRightHalfEnter = (idx: number) => setScore(idx + 1);

  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);

  const handleStarClick = async () => {
    if (loginState?.loginState === false) {
      setModalState(1);
    } else {
      setScoreFixed(score);
    }
  };

  const handleStarLeave = () => {
    if (score !== scoreFixed) {
      setScore(scoreFixed);
    }
  };

  const handleStar = async () => {
    await SingleMovieApi.postStarEvaluate(Number(movieId), scoreFixed);
    await queryClient.invalidateQueries(["movie", movieId]);
  };

  useEffect(() => {
    if (!scoreFixed) handleStar();
  }, [scoreFixed]);

  return (
    <Block.RowBox>
      {Array(5)
        .fill(0)
        .map((i, idx) => (
          <S.StarDiv key={idx} onClick={handleStarClick}>
            {score - Math.floor(score) === 0.5 && Math.floor(score) === idx ? (
              <FaStarHalfAlt
                key={idx}
                style={{ position: "absolute" }}
                size={40}
                color="gold"
              />
            ) : idx + 1 > score ? (
              <FaStar
                key={idx}
                style={{ position: "absolute" }}
                size={40}
                color="lightGray"
              />
            ) : (
              <FaStar
                key={idx}
                color="gold"
                style={{ position: "absolute" }}
                size={40}
              />
            )}
            <S.Left
              key={idx + "left"}
              onMouseEnter={() => handleLeftHalfEnter(idx)}
              onMouseLeave={handleStarLeave}
            />
            <S.Right
              key={idx + "right"}
              onMouseEnter={() => handleRightHalfEnter(idx)}
              onMouseLeave={handleStarLeave}
            />
          </S.StarDiv>
        ))}
    </Block.RowBox>
  );
}
export default StarRating;
