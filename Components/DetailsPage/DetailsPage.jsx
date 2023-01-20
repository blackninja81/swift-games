import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import speaker1 from "../../Assets/Accessories/speaker1.webp";
import speaker2 from "../../Assets/Accessories/speaker2.webp";
import speaker3 from "../../Assets/Accessories/speaker3.webp";
import speaker4 from "../../Assets/Accessories/speaker4.webp";

const DetailsPage = () => {
  return (
    <div className="item-details-section">
      <div className="image-section">
        <Carousel
          infiniteLoop
          autoPlay
          interval="5000"
          transitionTime="1000"
          swipeable="true"
          showIndicators="false"
        >
          <div>
            <img src="https://picsum.photos/700/400?img=1" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=2" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=3" />
          </div>
        </Carousel>
      </div>
      <div className="text-section">
        <h1>Beats By Dre Headphones</h1>
        <h3>Ksh. 20000</h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque
          laborum amet, temporibus autem consequuntur. Quidem non nobis illo,
          modi velit quod necessitatibus et animi ab sequi dicta sit officiis id
          dolores minus laborum ullam error? Incidunt beatae repellat dolore.
        </h4>
        <button>
          <BsCartPlus />
          <h5>Add to Cart</h5>
        </button>

        <div className="item-description">
          <span>
            <h3>ADDITIONAL INFORMATION</h3>
          </span>
          <ul>
            <li>Plartform : </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
