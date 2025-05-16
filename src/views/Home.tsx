import { useEffect } from "react";
import Header from "../Componets/common/Header/Header.tsx";
import Section from "../Componets/common/Section/Section.tsx";
import useAnime from "../hook/useAnime.ts";
import { lazyFetch } from "../utils/index.ts";
const Home = () => {
  const { fetchAnimeGenres } = useAnime();

  useEffect(() => {
    lazyFetch(fetchAnimeGenres);
  }, []);
  return (
    <div>
      <Header />

      <main>
        <Section />
      </main>
    </div>
  );
};

export default Home;
