import { useEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence, motion } from "framer-motion";

const IMG = [
  "https://images.freeimages.com/images/large-previews/2b6/free-banner-background-1639360.jpg",
  "https://images.freeimages.com/images/large-previews/76a/close-up-blue-violet-flower-macro-1641717.jpg",
  "https://images.freeimages.com/images/large-previews/f2e/free-banner-background-1639356.jpg",
];

const variants = {
  initial: (direction: number) => {
    return { x: direction > 0 ? 1920 : -1920, opacity: 1 };
  },
  animate: { x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { x: direction > 0 ? -1920 : 1920, opacity: 1 };
  },
};

export default function Banner() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setSlide(slide === IMG.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setSlide(slide === 0 ? IMG.length - 1 : slide - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev === IMG.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [slide]);

  useEffect(() => {
    setDirection(1);
  }, [direction]);

  return (
    <S.Wrapper>
      <S.Slide>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <S.SlideImg
            variants={variants}
            animate="animate"
            initial="initial"
            transition={{ type: "linear", duration: 0.5 }}
            exit="exit"
            src={IMG[slide]}
            alt="slides"
            key={IMG[slide]}
            custom={direction}
          />
        </AnimatePresence>
      </S.Slide>
      <S.LeftBtn onClick={prevSlide} />
      <S.RightBtn onClick={nextSlide} />
      <S.Indicators>
        {IMG.map((_, idx) => {
          return (
            <>
              {slide === idx ? (
                <S.IndicatorOn key={idx} onClick={() => setSlide(idx)} />
              ) : (
                <S.IndicatorOff key={idx} onClick={() => setSlide(idx)} />
              )}
            </>
          );
        })}
      </S.Indicators>
    </S.Wrapper>
  );
}
