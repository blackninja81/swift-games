import React from "react";
import Image from 'next/image'
import game1 from '../../Assets/Games/ac-origins.jpg'
import game2 from '../../Assets/Games/advanced-warfare.jpg'
import game3 from '../../Assets/Games/anthem.jpg'
import game4 from '../../Assets/Games/apex-legends.jpg'
import game5 from '../../Assets/Games/avengers.jpg'
import game6 from '../../Assets/Games/destiny.jpg'
import game7 from '../../Assets/Games/doom.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1>Spice Up Your Setup</h1>
      <div>
      <Splide options={
            {
              type   : 'loop',
              drag   : 'free',
              focus  : 'center',
              perPage: 4,
              autoScroll: {
                speed: 1,
              },
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    900: {
                        perPage: 2,
                    },
              }
            }
        }>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game2} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game3} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game4} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game5} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game6} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game7} height={400} width={300}/>
          <p>Price: 2000</p>
        </SplideSlide>
      </Splide>
      </div>
    </div>
  );
};

export default Accessories;
