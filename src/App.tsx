import { Outlet } from "react-router-dom";
import Modal from "@components/Modal/Modal";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { useQuery } from "@tanstack/react-query";
import { AccountApi } from "@apis/accountApi";
import { ILoginState } from "@interfaces/loginState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginStateAtom } from "@recoil/loginStateAtom";
import { useEffect } from "react";

function App() {
  const { data } = useQuery<ILoginState>({
    queryKey: ["loginState"],
    queryFn: AccountApi.loginState,
  });

  return (
    <>
      <NavigationBar />
      <Modal />
      <Outlet />
    </>
  );
}

export default App;
