import { Outlet } from "react-router-dom";
import Modal from "@components/Modal/Modal";

function App() {
    return (
        <>
            <Modal />
            <Outlet />
        </>
    );
}

export default App;
