import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='logoContainer'>
        <img src='' alt='' />
        <h2>SpaceRockets</h2>
      </div>
      <div>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/about'>Sobre a SpaceX</Link>
        </nav>
        <div>
          <input type='text' placeholder='Procure um foguete' />
        </div>
      </div>
    </header>
  );
}
