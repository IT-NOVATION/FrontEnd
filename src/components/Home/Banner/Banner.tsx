import { useEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { Block } from "@styles/UI";

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

    useEffect(() => {
        const timer = setInterval(() => {
            setSlide(prev => (prev === IMG.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, [slide]);

    return (
        <S.Wrapper>
            <Block.RowBox>
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
            </Block.RowBox>

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
