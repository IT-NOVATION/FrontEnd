import { Outlet } from "react-router-dom";
import Modal from "@components/Modal/Modal";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { useQuery } from "@tanstack/react-query";
import { AccountApi } from "@apis/accountApi";
import { ILoginState } from "@interfaces/loginState";
import { useSetRecoilState } from "recoil";
import { loginStateAtom } from "@recoil/loginStateAtom";

function App() {
    const setLoginState = useSetRecoilState(loginStateAtom);
    useQuery<ILoginState>({
        queryKey: ["loginState"],
        queryFn: async () => {
            const data = await AccountApi.loginState();
            setLoginState(data);
            return data;
        },
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
