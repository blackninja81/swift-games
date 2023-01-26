import { React, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GameContext } from "../context/Context";
import { ThreeCircles } from "react-loader-spinner";
import { getDiscounts } from "../lib/Providers/Discount";
import Footer from "../Components/Layout/Footer";
import TopBar from "../Components/Layout/TopBar";
import Category from "../Components/HomePage/Category";
import ItemCard from "../Components/ItemsPage/DiscountCard";
import Playstation from "../Assets/banners/sale.jpg";
import { ThemeContext } from "../context/Context";

const PlayStation = ({ discount }) => {
  const [theme, setTheme] = useState("light");
  const stateString = JSON.stringify(theme);
  localStorage.setItem('theme', stateString);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, []);

    return () => {
      clearTimeout(timer);
    };
  }, [discount]);

  if (loading) {
    return (
      <div className="loading-screen">
        <ThreeCircles
          height="100"
          width="100"
          color="lightpink"
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
          <title>Swift Games | Sale</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="playstation-page">
          <TopBar />
          <h1>Sale Items</h1>
          <Image src={Playstation} alt="image alt" />
          <GameContext.Provider value={{ discount }}>
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
  const discount = await getDiscounts();
  return {
    props: { discount },
  };
};

export default PlayStation;
