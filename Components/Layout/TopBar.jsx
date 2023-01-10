import { React, useState } from "react";
import CartCard from "./CartCard";
import { BsCartPlus } from "react-icons/bs";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="title-bar">
      <a href="/"><h1>Swift Games Ke</h1></a>
      <a>
        <div className="cart-icon" onClick={()=>setOpen(!open)}>
          <BsCartPlus />
          <span>0</span>
        </div>
      </a>
    </div>
      {open && <CartCard/>}
    </>
  );
};

export default TopBar;
