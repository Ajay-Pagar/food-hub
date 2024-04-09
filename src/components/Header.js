import { useState } from "react";
import foodImg from "../assets/Images/foodImg.png";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import { useSelector } from "react-redux";

export const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="image-container"
      src={foodImg}
      alt="Food Hub"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //this is Custom hook
  const isOnline = useOnline();
  // if (!isOnline) {
  //   return <h1>🔴 Offline, Please check your internet connection</h1>;
  // }

  const item = useSelector((store) => store.cart.items);
  // console.log(item);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li data-testid="cart-item">
            <Link to="/cart">cart</Link> - {item.length}
          </li>
          <li data-testid="online-status">{!isOnline ? "🔴" : "🟢"}</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
export default Header;
