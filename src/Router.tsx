import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import WriteReview from "@pages/WriteReview/WriteReview";
import KakaoLoginRedirect from "@pages/SocialLoginRedirect/SocialLoginRedirect";
import Film from "@pages/Film/Film";
import MovieTalk from "@pages/MovieTalk/MovieTalk";
import MovieLog from "@pages/MovieLog/MovieLog";
import SearchResult from "@pages/Search/SearchResult";

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
            { path: "film", element: <Film /> },
            { path: "movietalk", element: <MovieTalk /> },
            { path: "movielog", element: <MovieLog /> },
            { path: "search-result", element: <SearchResult /> },
        ],
        errorElement: <NotFound />,
    },
]);
