import { ToastContainer } from "react-toastify";
import RoutesMain from "./Routes";
import { GlobalStyle } from "./Global/index";

function App() {
  return (
    <>
      <RoutesMain />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
