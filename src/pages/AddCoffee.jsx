import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const [formData, setFormData] = useState({
    name: "",
    chef: "",
    suplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    fetch("https://coffee-website-backend-g3lrok0zm-md-ronys-projects.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Coffee Added Successfully😊",
          });
          setFormData({
            name: "",
            chef: "",
            suplier: "",
            taste: "",
            category: "",
            details: "",
            photo: "",
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="py-[25px] md:py-[50px]">
          <Link
            to="/"
            className="text-[22px] md:text-[40px] text-[#374151] btn flex items-center gap-3"
          >
            <FaArrowLeftLong />
            Back To Home
          </Link>
        </div>
        <div className="bg-[#F4F3F0] md:px-[120px] py-[35px]  md:py-[70px] rounded-lg shadow-lg p-6">
          <h1 className="font-medium mb-6 text-[#374151] text-[25px] md:text-[45px] text-center">
            Add New Coffee
          </h1>
          <p className="text-[#1B1A1AB3] md:text-center my-4 mdmy-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label
                  for="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="card-number"
                  placeholder="Enter coffee name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  value={formData.chef}
                  onChange={handleChange}
                  id="expiration-date"
                  placeholder="Enter chef name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Suplier
                </label>
                <input
                  type="text"
                  name="suplier"
                  value={formData.suplier}
                  onChange={handleChange}
                  id="cvv"
                  placeholder="Enter suplier name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  value={formData.taste}
                  onChange={handleChange}
                  id="card-holder"
                  placeholder="Enter Coffee taste"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  id="cvv"
                  placeholder="Enter coffee categoreis"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  for="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  id="card-holder"
                  placeholder="Enter Coffee Details"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                for="card-holder"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                id="card-holder"
                placeholder="Enter Coffee Photo URL"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#D2B48C] border border-[#331A15] text-[#331A15] font-medium py-3 rounded-lg focus:outline-none btn text-[24px]"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
