import { Outlet } from "react-router-dom";
import Modal from "components/Modal/Modal";
import { Block } from "styles/UI";

function App() {
  return (
    <>
      <Modal />

      <Outlet />
    </>
  );
}

export default App;
