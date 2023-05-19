import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import WriteReview from "pages/WriteReview/WriteReview";

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
        path: "write-review",
        element: <WriteReview />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
