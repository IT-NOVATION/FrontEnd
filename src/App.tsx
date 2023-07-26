import { Outlet } from "react-router-dom";
import Modal from "@components/Modal/Modal";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { useQuery } from "@tanstack/react-query";
import { AccountApi } from "@apis/accountApi";
import { ILoginState } from "@interfaces/loginState";
import { Suspense } from "react";
import Footer from "@components/Footer/Footer";
import { Block } from "@styles/UI";

function App() {
  useQuery<ILoginState>({
    queryKey: ["loginState"],
    queryFn: async () => await AccountApi.loginState(),
  });

  return (
    <>
      <Suspense fallback={<></>}>
        <NavigationBar />
      </Suspense>
      <Modal />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
