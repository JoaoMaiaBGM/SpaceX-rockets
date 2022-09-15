import { ToastContainer } from "react-toastify";
import RoutesMain from "./Routes";
import { GlobalStyle } from "./Global/index";
import { Provider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <Provider>
        <RoutesMain />
      </Provider>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
