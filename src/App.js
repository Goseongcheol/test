
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Map from "./pages/map/map";
import Home from "./pages/home/home";


function App() {
  return (
    <BrowserRouter basename="/map">
    <Routes >
      <Route path="/" element={<Home />} />
      <Route  path="/map" element={<Map />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;