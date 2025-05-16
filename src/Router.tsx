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
          <Route path="/about" element={<div>Login</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
