import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Map from "./pages/map/map";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { useSelector } from "react-redux";
import Netflix from "./pages/netflix/netflix.js";

function App() {
  const userInfo = useSelector((state) => state.login.userInfo);
  return (
    <BrowserRouter basename="/">
      <Routes>
        {userInfo ? (
          <>
            <Route path="/map" element={<Home />} />
            <Route path="/map/map" element={<Map />} />
            <Route path="/netflix" element={<Netflix />} />
          </>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
