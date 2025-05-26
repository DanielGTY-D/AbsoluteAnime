import { useEffect } from "react";
import Header from "../Componets/common/Header/Header.tsx";
import Section from "../Componets/common/Section/Section.tsx";
import useAnime from "../hook/useAnime.ts";
import { delay } from "../utils/index.ts";
import { useAppStore } from "../store/useAppStore.ts";
const Home = () => {
  const { fetchTopAnime, fetchRecentEpisodes } = useAnime();
  const recentEpisodesList = useAppStore((state) => state.recentEpisodesList);

  useEffect(() => {
    const fetchLazyData = async () => {
      fetchTopAnime();
      await delay(500);
      fetchRecentEpisodes();
      await delay(500);
    };
    fetchLazyData();
  }, []);
  return (
    <div className="main-content">
      <Header />
      <main className="contenedor">
        <Section
          sectionName={"Capitulos Recientes"}
          recentEpisodesList={recentEpisodesList}
          options={true}
        />
      </main>
    </div>
  );
};

export default Home;
