import React from "react";
import Image from 'next/image'
import { BsHeadset } from 'react-icons/bs'
import { TbDiscount } from 'react-icons/tb'
import { SiNintendoswitch } from 'react-icons/si'
import { FaXbox, FaPlaystation } from 'react-icons/fa'

const Category = () => {
  return (
    <div className="category-section">
      <h1>Choose A Category</h1>
      <div className="category-image">
        <a className="discount" href="/Sale"><TbDiscount/></a>
        <a className="x-box" href="/Xbox"> <FaXbox/></a> 
        <a className="ps" href="/Playstation"><FaPlaystation/></a>
        <a className="accesory" href="/Accessories"><BsHeadset/></a>
        <a className="switch" href="/Switch"><SiNintendoswitch/></a>
      </div>
    </div>
  );
};

export default Category;
