import React from "react";
import Image from 'next/image'
import game1 from '../../Assets/Accessories/beat.webp'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Accessories = () => {
  return (
    <div className="accessories-section">
      <h1>Spice Up Your Setup</h1>
      <div>
      <Splide options={
            {
              // type   : 'loop',
              arrowPath:'false',
              drag   : 'free',
              focus  : 'center',
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
                     
              }
            }
        }>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className='accessories-images'>
          <Image src={game1} height={400} width={300} alt='accesory-image'/>
          <p>Price: 2000</p>
        </SplideSlide>
        <SplideSlide className="more-accessories">
            <a href="/Items" target="_blank">
            <BsFillArrowRightCircleFill />
            </a>
            <h4>More Accessories</h4>
          </SplideSlide>
      </Splide>
      </div>
    </div>
  );
};

export default Accessories;
