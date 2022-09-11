import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to='/dashboard'>
        <button type='button'>Ir para Dashboard</button>
      </Link>
    </div>
  );
}