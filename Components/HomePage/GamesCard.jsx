import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect,useState } from "react";
import game1 from '../../Assets/Games/ac-origins.jpg'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const GamesCard = () => {

  return (
    <div className="games-card">
      <div>
        <Splide
          options={{
            // type   : 'loop',
            drag: "free",
            focus: "center",
            perPage: 5,
            autoScroll: {
              speed: 1,
            },
            breakpoints: {
              1600: {
                perPage: 4,
              },
              1320: {
                perPage: 3,
              },
              1024: {
                perPage: 2,
              },
              720: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide className="game-images">
            <img
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default GamesCard;
