import { SearchResultApi } from "@apis/searchResultApi";
import { IMovieResult } from "@interfaces/movieResult";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function MovieResult() {
    const { movieTitle } = useParams();

    const { data: movieResult } = useQuery<IMovieResult>({
        queryKey: ["movieResult"],
        queryFn: async () => await SearchResultApi.getMovieResult(String(movieTitle)),
    });

    return <>{movieResult?.movieTitle}</>;
}
