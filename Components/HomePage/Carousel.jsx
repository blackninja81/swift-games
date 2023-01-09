import React from "react";
import Image from "next/image";
import Sale from '../../Assets//banners/sale.jpg'
import game1 from "../../Assets/Games/ac-origins.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel = () => {
  return (
    <div>
      <Splide
        options={{
          autoplay: true,
          rewind: true,
        }}
      >
        <SplideSlide className="carousel">
          <div className="carousel-slide">
            <div className="carousel-image">
              <Image src={game1} height={400} width={300} alt="game-cover" />
            </div>
            <div className="carousel-text">
              <h1>Product</h1>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique debitis ut eligendi accusantium architecto repellendus
                cumque natus nostrum hic? Quas odio impedit possimus culpa qui
                velit nulla. Dolorum omnis voluptatum, aut explicabo quibusdam
                quae in ad tempore id iusto harum!
              </h4>
              <h4>Discount: discount</h4>
              <button>Buy Now</button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
