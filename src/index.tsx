import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@styles/GlobalStyle";
import theme from "@styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <GlobalStyle theme={theme} />
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
