import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-[60px] md:pt-[120px] pb-10 md:pb-20 mt-[60px] md:mt-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-10 flex-col md:flex-row">
            <div className="mx-5">
              <img className="w-[60px]" src="/images/more/logo1.png" alt="" />
              <h1 className="text-[#331A15] text-[30px] md:text-[60px]">Espresso Emporium</h1>
              <p className="text-[#331A15] md:w-[660px] w-full">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex items-center gap-5 my-7">
                <FaFacebook className="text-[30px]" />
                <FaLinkedin className="text-[30px]" />
                <FaTwitter className="text-[30px]" />
                <FaInstagramSquare className="text-[30px]" />
              </div>
              <div>
                <h1 className="text-[25px] md:text-[45px] mb-4 md:mb-8">Get in Touch</h1>
                <p className="flex items-center gap-4 mb-2">
                  <FaPhoneAlt />
                  +88 01533 333 333
                </p>
                <p className="flex items-center gap-4 mb-2">
                  <MdEmail />
                  info@gmail.com
                </p>
                <p className="flex items-center gap-4 mb-2">
                  <MdLocationOn />
                  Dhakan,Bangladesh
                </p>
              </div>
            </div>
            <div class="card h-fit w-full md:w-[600px] p-5 md:p-12" id="form">
              <h1 class="mb-4 text-[25px] md:text-[45px] text-[#331A15]">Contact With Us</h1>
              <form id="contactForm">
                <div class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="name"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autocomplete="given-name"
                        placeholder="Your name"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="email"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autocomplete="email"
                        placeholder="Your email address"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label
                      for="textarea"
                      class="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-[130px] border border-[#331A15] rounded-[30px] text-[#331A15] text-[20px] py-2 btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-footer py-5">
        <h1 className="text-white text-center text-base md:text-[20px]">Copyright Espresso Emporium ! Developed By MD Rony</h1>
      </div>
    </>
  );
};

export default Footer;
