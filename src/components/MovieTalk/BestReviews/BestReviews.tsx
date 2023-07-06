import { MovieTalkApi } from "@apis/movieTalkApi";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { IBestReview } from "@interfaces/bestReview";
import { Block } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";
import BestReview from "./BestReview/BestReview";

function BestReviews() {
  const { data: bestReviews } = useQuery<IBestReview[]>({
    queryKey: ["BestReviews"],
    queryFn: MovieTalkApi.bestReviews,
  });

  return (
    <Block.ColumnBox margin="0 0 70px 0 ">
      {bestReviews?.map((v) => (
        <BestReview bestReview={v} />
      ))}
    </Block.ColumnBox>
  );
}
export default BestReviews;
