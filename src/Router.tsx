import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Menu from "./layout/Menu/Menu";
import Home from "./views/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>Login</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
