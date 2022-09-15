import { CardContainer } from "./styles";
import { ImCircleRight } from "react-icons/im";

export default function Cards({ rockets }) {
  return rockets.map((rocket, index) => (
    <CardContainer key={index}>
      <div className='cardImage'>
        <img src={rocket.flickr_images[0]} alt='imagem do foguete' />
        <button className='btnDetails'>
          Detalhes
          <ImCircleRight />
        </button>
      </div>
    </CardContainer>
  ));
}
