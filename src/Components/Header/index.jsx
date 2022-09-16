import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import LogoWalk from "../../Assets/bx_bx-walk.svg";

import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <main className='headerMain'>
        <div className='logoContainer'>
          <img src={LogoWalk} alt='desenho de um boneco em movimento' />
          <h2>SpaceRockets</h2>
        </div>
        <div className='sectionContainer'>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/about'>Sobre a SpaceX</Link>
          </nav>
          <div className='inputContainer'>
            <input type='text' placeholder='Procure um foguete' />
            <ImSearch />
          </div>
        </div>
      </main>
    </HeaderContainer>
  );
}
