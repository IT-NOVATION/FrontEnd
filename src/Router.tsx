import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import WriteReview from "@pages/WriteReview/WriteReview";
import KakaoLoginRedirect from "@pages/SocialLoginRedirect/SocialLoginRedirect";
import MovieLog from "@pages/MovieLog/MovieLog";
import EntireMovie from "@pages/EntireMovie/EntireMovie";
import MovieTalk from "@pages/MovieTalk/MovieTalk";
import SearchResult from "@pages/Search/SearchResult";
import SingleMovie from "@pages/SingleMovie/SingleMovie";

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
                path: "write-review",
                element: <WriteReview />,
            },
            {
                path: "/kakao-redirect/:accessToken/:refreshToken",
                element: <KakaoLoginRedirect />,
            },
            { path: "entireMovie", element: <EntireMovie /> },
            { path: "movietalk", element: <MovieTalk /> },
            {
                path: "movieLog/:userId",
                element: <MovieLog />,
            },
            { path: "/search-result", element: <SearchResult /> },
            { path: "singleMovie/:movieId", element: <SingleMovie /> },
        ],
        errorElement: <NotFound />,
    },
]);
