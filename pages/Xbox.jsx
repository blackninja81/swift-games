import Head from "next/head";
import Image from "next/image";
import { ThemeContext } from "../context/Context";
import { React, useState, useEffect } from "react";
import Footer from "../Components/Layout/Footer";
import TopBar from "../Components/Layout/TopBar";
import { GameContext } from "../context/Context";
import { ThreeCircles } from "react-loader-spinner";
import Category from "../Components/HomePage/Category";
import Playstation from "../Assets/banners/xbox.jpg";
import { getXboxGames } from "../lib/Providers/Games";
import ItemCard from "../Components/ItemsPage/XboxCard";

const XBox = ({ res }) => {

  const [theme, setTheme] = useState("light");
 
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stateString = JSON.stringify(theme);
      window.localStorage.setItem("theme", stateString);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const getString = window.localStorage.getItem("theme");
      const state = JSON.parse(getString);
      setTheme(state);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [res]);
  
  if (loading) {
    return (
      <div className="loading-screen">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div id={theme}>
      <Head>
        <title>Swift Games | X Box</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="playstation-page">
        <TopBar />
        <h1>X BOX Games</h1>
        <Image src={Playstation} />
        <GameContext.Provider value={{ res }}>
          <ItemCard />
        </GameContext.Provider>
        <Category />
        <Footer />
      </div>
    </div>
    </ThemeContext.Provider>
  );
};

export const getServerSideProps = async () => {
  const res = await getXboxGames();
  return {
    props: { res },
  };
};

export default XBox;
