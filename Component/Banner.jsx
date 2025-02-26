import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-40 left-30">
        <p className="text-2xl">NEW INSPIRATION</p>
        <h1 className="text-5xl mt-4 mb-4
">20% OFF ON NEW SEASON</h1>
        <button className="bg-black text-white p-2">Browse collections</button>
      </div>
        <img src="src/Picture/banner1.jpg" />
    </div>
  );
};

export default Banner;
