import { useState } from "react";
import Api from "../../Services/Api";
import Cards from "../Cards";

import { ListContainer } from "./styles";

export default function List() {
  const [rockets, setRockets] = useState([]);

  function getRockets() {
    Api.get("/rockets")
      .then((response) => {
        setRockets(response.data);
      })
      .catch((err) => console.log(err));
  }
  getRockets();

  return (
    <ListContainer>
      <ul>
        <Cards rockets={rockets} />
      </ul>
    </ListContainer>
  );
}
