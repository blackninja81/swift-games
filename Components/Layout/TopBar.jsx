import CartCard from "./CartCard";
import Switch from "react-switch";
import { React, useState, useContext } from "react";
import { ThemeContext } from "../../context/Context";
import { BsCartPlus } from "react-icons/bs";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="title-bar">
        <a href="/">
          <h1>Swift Games Ke</h1>
        </a>
        <a>
          <div className="cart">
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <BsCartPlus />
              <span>0</span>
            </div>
            <div className="theme-switch">
              <Switch onChange={toggleTheme} checked={ theme === "dark"} />
            </div>
          </div>
        </a>
      </div>
      {open && <CartCard />}
    </div>
  );
};

export default TopBar;
