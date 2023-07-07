import { useEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { Block } from "@styles/UI";

const IMG = [
    "https://c.wallhere.com/photos/46/cd/playa_beach_costa_shore_agua_water_olas_waves-583605.jpg!d",
    "https://c.wallhere.com/photos/76/71/bridge_canon_michael_long_exposure_5d_boyet_1740mml-619369.jpg!d",
    "https://c.wallhere.com/photos/fe/a6/lugo_galicia_espa_a_spain_marina_seascape_mar_airelibre-528469.jpg!d",
];

export default function Banner() {
    const [slide, setSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleIndicatorClick = (idx: number) => {
        const prev = slide;
        if (prev === 0) {
            if (idx === 1) setDirection(1);
            if (idx === 2) setDirection(-1);
        }
        if (prev === 1) {
            if (idx === 0) setDirection(-1);
            if (idx === 2) setDirection(1);
        }
        if (prev === 2) {
            if (idx === 0) setDirection(1);
            if (idx === 1) setDirection(-1);
        }
        setSlide(idx);
    };

    useEffect(() => {
        setDirection(1);
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
                        variants={S.variants}
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
                                <S.IndicatorOn key={idx} onClick={() => handleIndicatorClick(idx)} />
                            ) : (
                                <S.IndicatorOff key={idx} onClick={() => handleIndicatorClick(idx)} />
                            )}
                        </>
                    );
                })}
            </S.Indicators>
        </S.Wrapper>
    );
}
