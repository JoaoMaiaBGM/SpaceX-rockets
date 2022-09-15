import { CardContainer } from "./styles";
import rocket from "../../Assets/Foguete.svg";
import { ImCircleRight } from "react-icons/im";

export default function CardsFront() {
  return (
    <CardContainer>
      <div className='cardImage'>
        <img src={rocket} alt='imagem do foguete' />
        <button className='btnDetails'>
          Detalhes
          <ImCircleRight />
        </button>
      </div>
    </CardContainer>
  );
}
