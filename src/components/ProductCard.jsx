import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ coffee, removeCoffee }) => {
  const { name, chef, suplier, taste, category, details, photo, _id } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-website-backend-g3lrok0zm-md-ronys-projects.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              removeCoffee(id);
            }
            console.log(data);
          });
      }
    });
  };
  return (
    <div className="max-w-7xl md:mx-auto mx-5">
      <div className="bg-[#F5F4F1] flex gap-4  md:gap-[35px] items-center w-full md:w-[630px] rounded-[10px]">
        <div>
          <img className="w-[100px] md:w-full" src={photo} alt="coffee image" />
        </div>
        <div>
          <p className="text-base md:text-[20px] font-medium mb-2">
            Name: <span className="font-normal text-[#5C5B5B]">{name}</span>
          </p>
          <p className="text-base md:text-[20px] font-medium mb-2">
            Chef: <span className="font-normal text-[#5C5B5B]">{chef}</span>
          </p>
          <p className="text-base md:text-[20px] font-medium mb-2">
            Price: <span className="font-normal text-[#5C5B5B]">890 Taka</span>
          </p>
        </div>
        <div className="md:ml-[55px] mr-4">
          <button className="bg-[#D2B48C] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-[5px] mb-4">
            <TiEye className="text-white text-[25px]" />
          </button>
          <button className="bg-[#3C393B] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-[5px] mb-4">
            <Link to={`updateCoffee/${_id}`}>
              <MdEdit className="text-white text-[25px]" />
            </Link>
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#EA4744] w-[20px] h-[20px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-[5px]"
          >
            <MdDelete className="text-white text-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
