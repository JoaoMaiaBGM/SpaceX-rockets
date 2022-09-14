import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import homeImg from "../../Assets/home_img.svg";
import Footer from "../../Components/Footer";

import { BackgroundContainer, MainContainer } from "./styles";

export default function Home() {
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${homeImg})` }}>
      <Header />
      <MainContainer>
        <div>
          <h1>SpaceX rockets</h1>
          <p>
            Venha descobrir informações e curiosidades sobre os foguetes dessa
            empresa que mais cresce no mundo. Pesquise por um nome de foguete
            específico ou clique no botão abaixo para ser redirecionado(a) para
            a nossa dashboard.
          </p>
          <Link to='/dashboard'>
            <button type='button'>Conheça os foguetes</button>
          </Link>
        </div>
      </MainContainer>
      <Footer />
    </BackgroundContainer>
  );
}
