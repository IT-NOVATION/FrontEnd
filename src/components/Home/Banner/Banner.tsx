import { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence, useMotionValue } from "framer-motion";
import { Block } from "@styles/UI";
import React from "react";

const IMG = [
  "/images/banners/banner1.png",
  "/images/banners/banner2.png",
  "/images/banners/banner3.png",
  "/images/banners/banner4.png",
];

function Banner() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
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
          {slide === 0 ? (
            <S.SlideImg
              variants={S.variants}
              animate="animate"
              initial="initial"
              transition={{ type: "linear", duration: 0.5 }}
              exit="exit"
              img={IMG[0]}
              key={slide}
              custom={direction}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
            />
          ) : slide === 1 ? (
            <S.SlideImg
              variants={S.variants}
              animate="animate"
              initial="initial"
              transition={{ type: "linear", duration: 0.5 }}
              exit="exit"
              img={IMG[1]}
              key={slide}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              custom={direction}
            />
          ) : slide === 2 ? (
            <S.SlideImg
              variants={S.variants}
              animate="animate"
              initial="initial"
              transition={{ type: "linear", duration: 0.5 }}
              exit="exit"
              img={IMG[2]}
              key={slide}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              custom={direction}
            />
          ) : (
            <S.SlideImg
              variants={S.variants}
              animate="animate"
              initial="initial"
              transition={{ type: "linear", duration: 0.5 }}
              exit="exit"
              img={IMG[3]}
              key={slide}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              custom={direction}
            />
          )}
        </AnimatePresence>
      </Block.RowBox>

      <S.Indicators>
        {IMG.map((_, idx) => {
          return (
            <>
              {slide === idx ? (
                <S.IndicatorOn key={idx} isAnimating={isAnimating} />
              ) : (
                <S.IndicatorOff
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                  isAnimating={isAnimating}
                  disabled={isAnimating}
                />
              )}
            </>
          );
        })}
      </S.Indicators>
    </S.Wrapper>
  );
}
export default React.memo(Banner);
