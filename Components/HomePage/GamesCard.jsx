import React from "react";
import Image from "next/image";
import Game from "./Game";
import game1 from "../../Assets/Games/ac-origins.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const GamesCard = ({ res }) => {
  // console.log(res[0].attributes.image.data[0].attributes.name);
  return (
    <div className="games-card">
      <div>
        <h1>Select From A wide Variety Of Our Game Collection</h1>
        <Splide
          options={{
            // type   : 'loop',
            drag: "free",
            arrowPath: "false",
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
          {res.map((item) => (
            <SplideSlide className="game-images">
              <a href="/Details">
                <Game key={item.id} item={item} />
              </a>
            </SplideSlide>
          ))}
          <SplideSlide className="more-games">
            <a href="/Playstation" target="_blank">
              <BsFillArrowRightCircleFill />
            </a>
            <h4>More Games</h4>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default GamesCard;
