import React from "react";
import Image from "next/image";
import game1 from '../../Assets/Games/ac-origins.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Splide, SplideSlide } from "@splidejs/react-splide";

const GamesCard = () => {

  return (
    <div className="games-card">
      <div>
      <h1>Select From A wide Variety Of Our Game Collection</h1>
        <Splide
          options={{
            // type   : 'loop',
            drag: "free",
            arrowPath:'false',
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
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="game-images">
            <Image
              src={game1}
              height={400}
              width={300}
              alt="game-cover"
            />
            <h4>title</h4>
            <p>Price: price</p>
          </SplideSlide>
          <SplideSlide className="more-games">
            <a href="/Games" target="_blank">
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
