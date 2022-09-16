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
    </>
  );
}

export default App;
