import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import WriteReview from "@pages/WriteReview/WriteReview";
import KakaoLoginRedirect from "@pages/SocialLoginRedirect/SocialLoginRedirect";
import MovieLog from "@pages/MovieLog/MovieLog";
import Film from "@pages/Film/Film";
import MovieTalk from "@pages/MovieTalk/MovieTalk";
import SearchResult from "@pages/Search/SearchResult";
import ReadReview from "@pages/ReadReview/ReadReview";
import Loading from "@components/Home/Loading/Loading";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
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
      { path: "film", element: <Film /> },
      { path: "movietalk", element: <MovieTalk /> },
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
