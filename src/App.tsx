import { Outlet } from "react-router-dom";
import Modal from "@components/Modal/Modal";
import NavigationBar from "@components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <Modal />
      <Outlet />
    </>
  );
}

export default App;
