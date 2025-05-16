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
    <>
      <Header />

      <main>{/* <Section name={"Capitulos Recientes"} /> */}</main>
    </>
  );
};

export default Home;
