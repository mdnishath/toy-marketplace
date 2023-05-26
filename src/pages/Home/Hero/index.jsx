import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="hero min-h-screen"
      data-aos="fade-up"
      style={{
        backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5403a7d0e4b0e9cf18a425fa/1590425083131-774XGT02P3SBSZ5T9CJE/banner.2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 md:text-5xl text-xl font-bold">
            Rev up the Fun with Our Toy Car Shop!
          </h1>
          <p className="mb-5 text-lg md:w-[600px] w-full mx-auto">
            Discover a world of excitement and adventure with our incredible
            selection of toy cars. From sleek sports cars to mighty trucks and
            speedy police cars, our collection has something for every young
            racing enthusiast.
          </p>
          <Link to={"/all-toys"} className="btn bg-btn text-black px-6">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
