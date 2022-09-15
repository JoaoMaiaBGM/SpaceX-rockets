export default function ModalCard() {
  return (
    <div className='cardBack'>
      <div className='cardInfo'>
        <h3>Nome:</h3>
        <p>Falcon 1</p>

        <h3>Situação:</h3>
        <p>Inativo</p>

        <h3>Custo de lançamento:</h3>
        <p>US$ 6,7 milhões</p>

        <h3>Altura:</h3>
        <p>70 metros</p>

        <h3>Peso:</h3>
        <p>549 toneladas</p>

        <h3>Qtd motores:</h3>
        <p>09</p>

        <h3>Primeiro vôo:</h3>
        <p>24/03/06</p>
      </div>
      <button className='btnImage'>Imagem</button>
    </div>
  );
}
