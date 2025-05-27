import { useEffect } from "react";
import Header from "../Componets/common/Header/Header.tsx";
import Section from "../Componets/common/sections/Section/Section.tsx";
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
          options={false}
        />

        <Section sectionName={"The mos popular of Action"} options={true} genreId={1}/>
        <Section sectionName={"The mos popular of Drama"} options={true} genreId={8}/>
        <Section sectionName={"The mos popular of Fantasy"} options={true} genreId={10}/>
        <Section sectionName={"The mos popular of Comedy"} options={true} genreId={4}/>
        <Section sectionName={"The mos popular of Romance"} options={true} genreId={22}/>
      </main>
    </div>
  );
};

export default Home;
