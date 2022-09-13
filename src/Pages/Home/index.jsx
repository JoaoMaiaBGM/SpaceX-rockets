import { Link } from "react-router-dom";
import Header from "../../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Link to='/dashboard'>
          <button type='button'>Ir para Dashboard</button>
        </Link>
      </main>
    </>
  );
}
