import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home";
import LayoutInicio from "./layout/LayoutInicio";
import AnimeList from "./views/animeList";
import Anime from "./views/anime";
import Episode from "./views/episode";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutInicio />}>
          <Route path="/" element={<Home />} />
          <Route path="/anime-list" element={<AnimeList/>}/>
          <Route path="/anime" element={<Anime />} />
          <Route path="/episode" element={<Episode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
