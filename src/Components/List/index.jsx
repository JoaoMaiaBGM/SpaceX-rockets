import { useContext } from "react";
import Cards from "../Cards";
import { Context } from "../../Context/AuthContext";

import { ListContainer } from "./styles";

export default function List() {
  const { rockets } = useContext(Context);

  return (
    <ListContainer>
      <ul>
        <Cards rockets={rockets} />
      </ul>
    </ListContainer>
  );
}
