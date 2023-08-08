import { useState } from "react";

export default function useMovieTime() {
  // 무비타임 컴포넌트 로직
  const [showPopular, setShowPopular] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [animate, setAnimate] = useState(false);
  const handlePopularClick = () => {
    setAnimate(false);
    setPage([0, 0]);
    setShowPopular(true);
  };
  const handleRecommendedClick = () => {
    setAnimate(false);
    setPage([0, 0]);
    setShowPopular(false);
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setAnimate(true);
  };
  const handleNextClick = () => {
    paginate(1);
  };
  const handlePrevClick = () => {
    paginate(-1);
  };
  return {
    showPopular,
    page,
    direction,
    animate,
    handlePopularClick,
    handleRecommendedClick,
    paginate,
    handleNextClick,
    handlePrevClick,
  };
}
