import React from "react";
import { FaCartFlatbed } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="flex justify-between bg-red-100
w-screen
">
      <div className="flex justify-between gap-5">
        <h3>Home</h3>
        <h3>Shop</h3>
      </div>
      <h2>BOUTIQUE</h2>
      <div className="flex justify-between gap-5">
        <h3 className="flex gap-1"><FaCartFlatbed />
        Cart</h3>
        <h3>AnhND</h3>
        <h3>(Logout)</h3>
      </div>
    </div>
  );
};

export default Header;
