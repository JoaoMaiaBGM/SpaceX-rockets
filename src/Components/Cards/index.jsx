import { CardContainer } from "./styles";
import { ImCircleRight } from "react-icons/im";
import { useState } from "react";
import ModalCard from "../ModalCard";

export default function Cards({ rockets }) {
  const [isOpenModalCard, setIsOpenModalCard] = useState(false);
  const [rocketData, setRocketData] = useState([]);

  function handleClickDetails(rocket) {
    setRocketData(rocket);
  }

  return rockets.map((rocket, index) => (
    <>
      <CardContainer key={index}>
        <div className='cardImage'>
          <img src={rocket.flickr_images[0]} alt='imagem do foguete' />
          <button
            className='btnDetails'
            onClick={() => {
              setIsOpenModalCard(true);
              handleClickDetails(rocket);
            }}>
            Detalhes
            <ImCircleRight />
          </button>
        </div>
      </CardContainer>
      <ModalCard
        isOpenModalCard={isOpenModalCard}
        setIsOpenModalCard={setIsOpenModalCard}
        rocketData={rocketData}
      />
    </>
  ));
}
