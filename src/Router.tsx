import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home";
import LayoutInicio from "./layout/LayoutInicio";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutInicio />}>
          <Route path="/" element={<Home />} />
          <Route path="/capitulos-recientes" element={<div>Login</div>} />
          <Route path="/generos" element={<div>Profile</div>} />
          <Route path="/generos/" element={<div>generos</div>} />
          <Route path="anime-destacado" element={<div>anime-destacado</div>} />
          <Route path="manga-destacado" element={<div>manga-destacado</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
