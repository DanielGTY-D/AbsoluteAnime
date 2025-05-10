import { useEffect } from "react";
import Header from "../Componets/common/Header/Header.tsx";
import Section from "../Componets/common/Section/Section.tsx";
import useAnime from "../hook/useAnime.ts";
const Home = () => {
  const { fetchAnimeGenres } = useAnime();
  const lazyFetch = async (fn: () => void) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fn());
      }, 1000);
    });
  };

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
