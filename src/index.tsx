import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@styles/GlobalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();
queryClient.defaultQueryOptions({
  refetchOnWindowFocus: false,
});
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle theme={theme} />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
} else {
  root.render(
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle theme={theme} />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
