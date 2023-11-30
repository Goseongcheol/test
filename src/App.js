import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Map from "./pages/map/map";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/map" element={<Home />} />
        <Route path="/map/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
