import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { modalIsOpenAtom } from "./recoil/atoms";
import Modal from "./components/Modal/Modal";

function App() {
  const modalIsOpen = useRecoilValue(modalIsOpenAtom);
  return (
    <>
      {modalIsOpen && <Modal />}
      <Outlet />
    </>
  );
}

export default App;
