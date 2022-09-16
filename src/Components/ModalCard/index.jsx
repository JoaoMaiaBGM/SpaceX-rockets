import { Container, Modal } from "./styles";

export default function ModalCard({
  id = "modal",
  isOpenModalCard,
  setIsOpenModalCard,
  rocketData,
}) {
  function handleOutsideClick(event) {
    if (event.target.id === id) {
      setIsOpenModalCard(false);
    }
  }

  return (
    <Container
      id={id}
      isOpenModalCard={isOpenModalCard}
      onClick={handleOutsideClick}>
      <Modal>
        <div className='cardInfo'>
          <h3>Nome:</h3>
          <p>{rocketData.name}</p>

          <h3>Custo de lançamento:</h3>
          <p>{rocketData.cost_per_launch}</p>

          <h3>Descrição:</h3>
          <p>{rocketData.description}</p>

          <h3>Primeiro vôo:</h3>
          <p>{rocketData.first_flight}</p>
        </div>
      </Modal>
    </Container>
  );
}
