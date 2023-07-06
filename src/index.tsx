import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@styles/GlobalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle theme={theme} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </>
);
