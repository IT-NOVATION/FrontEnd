import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import WriteReview from "@pages/WriteReview/WriteReview";
import KakaoLoginRedirect from "@pages/SocialLoginRedirect/SocialLoginRedirect";
import MovieLog from "@pages/MovieLog/MovieLog";
import MovieTalk from "@pages/MovieTalk/MovieTalk";
import SearchResult from "@pages/Search/SearchResult";
import ReadReview from "@pages/ReadReview/ReadReview";
import SingleMovie from "@pages/SingleMovie/SingleMovie";
import MovieSearch from "@pages/MovieSearch/MovieSearch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "write-review/:movieId",
        element: <WriteReview />,
      },
      {
        path: "/kakao-redirect/:accessToken/:refreshToken",
        element: <KakaoLoginRedirect />,
      },
      { path: "movie-search", element: <MovieSearch /> },
      { path: "movietalk", element: <MovieTalk /> },
      { path: "singleMovie/:movieId", element: <SingleMovie /> },
      {
        path: "movieLog/:userId",
        element: <MovieLog />,
      },
      {
        path: "review/:reviewId",
        element: <ReadReview />,
      },
      { path: "/search-result", element: <SearchResult /> },
    ],
    errorElement: <NotFound />,
  },
]);
