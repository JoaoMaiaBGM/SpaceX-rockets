import { createContext, useState } from "react";
import Api from "../Services/Api";

const Context = createContext();

function Provider({ children }) {
  const [rockets, setRockets] = useState([]);

  function getRockets() {
    Api.get("/rockets")
      .then((response) => {
        setRockets(response.data);
      })
      .catch((err) => console.log(err));
  }
  getRockets();
  return <Context.Provider value={{ rockets }}>{children}</Context.Provider>;
}

export { Context, Provider };
