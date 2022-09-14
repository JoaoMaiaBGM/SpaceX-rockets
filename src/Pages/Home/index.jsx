import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import homeImg from "../../Assets/home_img.svg";
import Footer from "../../Components/Footer";

import { BackgroundContainer } from "./styles";

export default function Home() {
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${homeImg})` }}>
      <Header />
      <main>
        <Link to='/dashboard'>
          <button type='button'>Ir para Dashboard</button>
        </Link>
      </main>
      <Footer />
    </BackgroundContainer>
  );
}
