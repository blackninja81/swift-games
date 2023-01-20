import React from "react";
import Image from "next/image";
import game1 from "../../Assets/Games/anthem.jpg";
import { BsFillTrashFill } from "react-icons/bs";

const CartCard = () => {
  return (
    <div className="shopping-card">
      <h1>Products in your Cart</h1>
      <div className="card-main">
        <div className="card-details">
          <Image src={game1} width={150} height={150} />
          <div className="card-text">
            <h3>Assasins Creed</h3>
            <h4>1 x 2000</h4>
          </div>
          <BsFillTrashFill className="delete-item" />
        </div>
      </div>
      <div className="price">
        <h2>SUBTOTAL</h2>
        <h2>2000</h2>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartCard;
