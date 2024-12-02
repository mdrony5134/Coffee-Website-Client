import React from "react";
import Products from "../components/Products";
import CoffeeGallery from "../components/CoffeeGallery";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <CoffeeGallery />
    </div>
  );
};

export default Home;
