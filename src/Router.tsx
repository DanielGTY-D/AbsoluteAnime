import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./views/Home";
import LayoutInicio from "./layout/LayoutInicio";
import Anime from "./views/Anime";
import AnimeList from "./views/AnimeList";
import NotFound from "./views/NotFound";
import MangaList from "./views/MangaList";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutInicio />}>
          <Route index element={<Home />} />
          <Route path="anime-list" element={<AnimeList/>}/>
          <Route path="anime" element={<Anime />} />
          <Route path="manga-list" element={<MangaList />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
