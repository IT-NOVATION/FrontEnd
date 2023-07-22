import { Block, Text } from "@styles/UI";
import { useState } from "react";
import * as S from "../style";

import useHovered from "@hooks/useHovered";

type SearchType = "USER" | "MOVIE";

type Props = {
    isSelected: "USER" | "MOVIE";
    setIsSelected: React.Dispatch<React.SetStateAction<SearchType>>;
};

export default function SelectOption({ isSelected, setIsSelected }: Props) {
    const { isHovered: isUserHovered, handleHover: handleUserHover, handleLeave: handleUserLeave } = useHovered();
    const { isHovered: isMovieHovered, handleHover: handleMovieHover, handleLeave: handleMovieLeave } = useHovered();

    // const [isSelected, setIsSelected] = useState<SearchType>("MOVIE");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleShowDropdownMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleOptionClick = (to: SearchType) => {
        setIsSelected(to);
        if (isSelected === "USER") {
            // user 넘기기
        } else if (isSelected === "MOVIE") {
            // movie 넘기기
        }
    };

    return (
        <>
            <S.DropdownMenuWrapper onClick={handleShowDropdownMenu}>
                {isOpen ? (
                    <>
                        <S.OpenDropdown>
                            <Block.ColumnBox
                                height="120px"
                                justifyContent="space-evenly"
                                alignItems="center"
                                bgColor="white"
                            >
                                <S.HoverMenu
                                    isHovered={isMovieHovered}
                                    onMouseEnter={handleMovieHover}
                                    onMouseLeave={handleMovieLeave}
                                    onClick={() => handleOptionClick("MOVIE")}
                                >
                                    <Text.Body1>영화</Text.Body1>
                                </S.HoverMenu>
                                <S.HoverMenu
                                    isHovered={isUserHovered}
                                    onMouseEnter={handleUserHover}
                                    onMouseLeave={handleUserLeave}
                                    onClick={() => handleOptionClick("USER")}
                                >
                                    <Text.Body1>유저</Text.Body1>
                                </S.HoverMenu>
                            </Block.ColumnBox>
                        </S.OpenDropdown>
                    </>
                ) : (
                    <Block.RowBox justifyContent="center">
                        <Text.Body1>{isSelected === "MOVIE" ? "영화" : "유저"}</Text.Body1>
                    </Block.RowBox>
                )}
                <S.DropBtn onClick={handleShowDropdownMenu}>
                    <S.DropdownImg
                        src="/icons/dropdown-arrow.svg"
                        alt="dropdown-icon"
                        onClick={handleShowDropdownMenu}
                        onMouseEnter={handleUserHover}
                        onMouseLeave={handleUserLeave}
                    />
                </S.DropBtn>
            </S.DropdownMenuWrapper>
        </>
    );
}
