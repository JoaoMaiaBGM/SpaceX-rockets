import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}
