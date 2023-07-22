import { useEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { Block } from "@styles/UI";

const IMG = [
  "/images/banners/banner1.png",
  "/images/banners/banner2.png",
  "/images/banners/banner3.png",
  "/images/banners/banner4.png",
];

export default function Banner() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleIndicatorClick = (idx: number) => {
    const prev = slide;
    if (prev === 0 && idx === 3) {
      setDirection(-1);
    } else if (prev === 3 && idx === 0) {
      setDirection(1);
    } else if (prev < idx) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setSlide(idx);
  };

  useEffect(() => {
    setDirection(1);
    const timer = setInterval(() => {
      setSlide((prev) => (prev === IMG.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [slide]);

  return (
    <S.Wrapper>
      <Block.RowBox width="100vw" justifyContent="center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <S.SlideImg
            variants={S.variants}
            animate="animate"
            initial="initial"
            transition={{ type: "linear", duration: 0.5 }}
            exit="exit"
            img={IMG[slide]}
            key={IMG[slide]}
            custom={direction}
          />
        </AnimatePresence>
      </Block.RowBox>

      <S.Indicators>
        {IMG.map((_, idx) => {
          return (
            <>
              {slide === idx ? (
                <S.IndicatorOn
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                />
              ) : (
                <S.IndicatorOff
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                />
              )}
            </>
          );
        })}
      </S.Indicators>
    </S.Wrapper>
  );
}
