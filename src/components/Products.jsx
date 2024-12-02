import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);

  const removeCoffee = (id) => {
    const removeSingleCoffee = coffees.filter((coffee) => coffee._id !== id);
    setCoffees(removeSingleCoffee);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center pt-[60px] md:pt-[120px] pb-[25px] md:pb-[55px]">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-[#331A15] text-[25px] md:text-[55px] font-bold">
          Our Popular Products
        </h1>
        <Link
          to="/addCoffee"
          className=" inline-flex gap-2 text-[18px] rounded-md  items-center bg-[#E3B577] border border-[#331A15] py-1 px-4 text-white font-medium mt-2 btn"
        >
          Add Coffee
          <img className="w-[20px]" src="/images/icons/1.png" alt="" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <ProductCard key={coffee._id} coffee={coffee} removeCoffee={removeCoffee} />
        ))}
      </div>
    </div>
  );
};

export default Products;
