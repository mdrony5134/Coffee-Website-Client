import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex items-center justify-around">
      <div className="text-center gap-5 flex items-center justify-center">
        <img className="w-[60px]" src="/images/more/logo1.png" alt="" />
        <h1 className="text-white text-[30px] md:text-[60px]">
          Espresso Emporium
        </h1>
      </div>
      <Link to='/login'>
        <button className="bg-[#E3B577] px-5 text-[20px] py-1 btn rounded-md">
          Lgoin
        </button>
      </Link>
    </div>
  );
};

export default Header;
