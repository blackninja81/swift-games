import React from "react";
import Image from "next/image";
import watchdogs from "../../Assets/Games/watchdog.jpg";
import watch from "../../Assets/Accessories/watch_3.webp"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import earbuds from "../../Assets/Accessories/earphones_b_3.webp"

const Carousel = () => {
  return (
    <div>
      <Splide 
      options = {{
        autoplay: true,
        rewind: true,
      }}
      >
        <SplideSlide className="carousel">
          <div className="carousel-slide">
            <div className="carousel-image">
              <Image src={watch} />
            </div>
            <div className="carousel-text">
              <h1>WatchDogs 1</h1>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                minus animi expedita quae natus, ut, rerum non repellendus
                aspernatur eius quod aperiam veritatis ipsa quidem.
              </h4>
            <button>Buy Now</button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="carousel-slide">
            <div className="carousel-image">
              <Image src={earbuds} />
            </div>
            <div className="carousel-text">
              <h1>WatchDogs 1</h1>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                minus animi expedita quae natus, ut, rerum non repellendus
                aspernatur eius quod aperiam veritatis ipsa quidem.
              </h4>
            <button>Buy Now</button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
