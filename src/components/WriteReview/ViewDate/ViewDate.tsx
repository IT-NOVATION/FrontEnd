import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { Block, Text } from "@styles/UI";
import { ReviewDataContext } from "@pages/WriteReview/WriteReview";
import { convertDateToString } from "@utils/convertDateToString";
function ViewDate() {
  const reviewDataContext = useContext(ReviewDataContext);
  const [checked, setChecked] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setYear(0);
    setMonth(0);
    setDay(0);
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.currentTarget.value));
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.currentTarget.value));
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDay(Number(e.currentTarget.value));

  useEffect(() => {
    reviewDataContext?.setReviewData((prev) => {
      return { ...prev, hasCheckDate: checked };
    });
  }, [checked]);
  useEffect(() => {
    reviewDataContext?.setReviewData((prev) => {
      return { ...prev, watchDate: convertDateToString([year, month, day]) };
    });
  }, [year, month, day]);

  return (
    <Block.RowBox width="auto" margin="0 20px 0 0" alignItems="center">
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={toggleChecked}
      />
      <label htmlFor="checkbox">
        <Text.Body4 margin="0 10px 0 0">관람 일자 선택</Text.Body4>
      </label>
      <>
        <S.Select
          key={checked + "year"}
          disabled={!checked}
          onChange={handleYearChange}
        >
          <option value={year}>YYYY</option>
          {Array(30)
            .fill(0)
            .map((i, idx) => (
              <option key={idx + 1994} value={idx + 1994}>
                {idx + 1994}
              </option>
            ))}
        </S.Select>
        <S.Select
          key={checked + "month"}
          disabled={!year}
          onChange={handleMonthChange}
        >
          <option value={month}>MM</option>
          {Array(12)
            .fill(0)
            .map((i, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
        </S.Select>
        <S.Select
          key={checked + "day"}
          disabled={!month}
          onChange={handleDayChange}
        >
          <option value={day}>DD</option>
          {Array(
            month === 1 ||
              month === 3 ||
              month === 5 ||
              month === 7 ||
              month === 8 ||
              month === 10 ||
              month === 12
              ? 31
              : month === 2
              ? 28
              : 30
          )
            .fill(0)
            .map((i, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
        </S.Select>
      </>
    </Block.RowBox>
  );
}
export default ViewDate;
