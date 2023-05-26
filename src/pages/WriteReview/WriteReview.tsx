import * as S from "./style";
import NaviationBar from "@components/NavigationBar/NavigationBar";
import { Block, Button, Poster, Text } from "@styles/UI";
import ReviewEditor from "@components/WriteReview/ReviewEditor/ReviewEditor";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "@components/WriteReview/StarRating/StarRating";
import Keywords from "@components/WriteReview/Keywords/Keywords";
import ViewDate from "@components/WriteReview/ViewDate/ViewDate";

const MovieTestData = {
    //임시 더미 데이터
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
    title: "가디언즈 오브 갤럭시 3",
    date: "2023.05.16",
};

function WriteReview() {
    const navigate = useNavigate();
    const [title, setTitle] = useState(""); //제목
    const [score, setScore] = useState(0); //별점
    const [content, setContent] = useState(""); //내용
    const [keywords, setKeywords] = useState(Array(9).fill(false)); //키워드
    const [viewDate, setViewDate] = useState<number[]>(Array(3).fill(0));
    const [spoilerChecked, setSpoilerChecked] = useState(false);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const toggleSpoilerChecked = () => setSpoilerChecked(prev => !prev);

    const handleSubmit = async () => {
        //서버에 제출
        try {
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NaviationBar />

            {/* 헤더 */}
            <Block.ColumnBox width="100vw" height="200px" bgColor="darkWhite" alignItems="center">
                <Block.ColumnBox width="887px" margin="70px 0 0 0">
                    <Text.Title1>
                        <S.TitleInput onChange={handleTitleChange} type="text" placeholder="리뷰 제목" />
                    </Text.Title1>
                    <Block.RowBox margin="22px 0 0 0">
                        <Text.Body3 color="darkGray" margin="0 27px 0 0 ">
                            {MovieTestData.title}
                        </Text.Body3>
                        <Text.Body3 color="darkGray">{MovieTestData.date}</Text.Body3>
                    </Block.RowBox>
                </Block.ColumnBox>
            </Block.ColumnBox>

            <Block.PageWrapper>
                <Block.PageLayout>
                    <Block.RowBox width="887px" height="233px" margin="40px 25px 50px 0">
                        <Poster.Poster src={MovieTestData.imageUrl} size="sm" />
                        <Block.ColumnBox margin="0 0 0 25px">
                            <Block.ColumnBox>
                                <Text.Body4 margin="0 0 3px 0">별점</Text.Body4>
                                <StarRating setParentScore={setScore} />
                                <Block.Bar width="702px" bgColor="gray" margin="11px 0 0 0" />
                                <Keywords selected={keywords} setSelected={setKeywords} />
                                <Block.Bar width="702px" bgColor="gray" margin="13px 0 0 0" />
                            </Block.ColumnBox>
                        </Block.ColumnBox>
                    </Block.RowBox>

                    {/* 에디터 */}
                    <ReviewEditor setContent={setContent} />

                    {/* 관람일, 스포일러 */}
                    <Block.RowBox margin="0 0 24px 0" justifyContent="flex-end" alignItems="center">
                        <ViewDate setViewDate={setViewDate} />
                        <input id="spoiler" type="checkbox" checked={spoilerChecked} onChange={toggleSpoilerChecked} />
                        <label htmlFor="spoiler">
                            <Text.Body4>스포일러 포함</Text.Body4>
                        </label>
                    </Block.RowBox>

                    {/* 저장/취소 버튼 */}
                    <Block.RowBox margin="0 0 42px 0">
                        <Button.Button
                            width="306px"
                            height="41px"
                            margin="0 7px 0 0 "
                            color="black"
                            bgColor="white"
                            border=".5px solid #5F5F5F"
                            borderRadius="4px"
                        >
                            <Text.Body4>취소</Text.Body4>
                        </Button.Button>
                        <Button.Button width="594px" height="41px" color="white" bgColor="main" borderRadius="4px">
                            <Text.Body4>저장</Text.Body4>
                        </Button.Button>
                    </Block.RowBox>
                </Block.PageLayout>
            </Block.PageWrapper>
        </>
    );
}

export default WriteReview;
