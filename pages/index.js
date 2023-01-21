import axios from "axios";
import Head from "next/head";
import TopBar from "../Components/Layout/TopBar";
import Footer from "../Components/Layout/Footer";
import { getGames } from "../lib/Providers/Games";
import { GameContext } from "../context/Context";
import Category from "../Components/HomePage/Category";
import GamesCard from "../Components/HomePage/games/GamesCard";
import Carousel from "../Components/HomePage/Carousel/Carousel";
import Discounts from "../Components/HomePage/Discounts/Discounts";
import Accessories from "../Components/HomePage/Accessories/Accessories";

export default function Home({ res }) {
  return (
    <>
      <Head>
        <title>Swift Games</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Carousel />
      <Category />
      <Discounts />
      <GameContext.Provider value={{ res }}>
        <GamesCard />
      </GameContext.Provider>
      <Accessories />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await getGames();
  return {
    props: { res },
  };
};
