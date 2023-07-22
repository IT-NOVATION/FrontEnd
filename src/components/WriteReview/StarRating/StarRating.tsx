import { Block } from "@styles/UI";
import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ReviewDataContext } from "@pages/WriteReview/WriteReview";

function StarRating() {
    const [score, setScore] = useState<number>(0);
    const [scoreFixed, setScoreFixed] = useState(score);

    const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5);

    const handleRightHalfEnter = (idx: number) => setScore(idx + 1);

    const handleStarClick = async () => {
        setScoreFixed(score);
    };

    const handleStarLeave = () => {
        if (score !== scoreFixed) {
            setScore(scoreFixed);
        }
    };

    const reviewDataContext = useContext(ReviewDataContext);

    useEffect(() => {
        reviewDataContext?.setReviewData(prev => {
            return { ...prev, star: scoreFixed };
        });
    }, [scoreFixed]);

    return (
        <Block.RowBox>
            {Array(5)
                .fill(0)
                .map((i, idx) => (
                    <S.StarDiv key={idx} onClick={handleStarClick}>
                        {score - Math.floor(score) === 0.5 && Math.floor(score) === idx ? (
                            <FaStarHalfAlt key={idx} style={{ position: "absolute" }} size={32} color="gold" />
                        ) : idx + 1 > score ? (
                            <FaStar key={idx} style={{ position: "absolute" }} size={32} color="lightGray" />
                        ) : (
                            <FaStar key={idx} color="gold" style={{ position: "absolute" }} size={32} />
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
