import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}
