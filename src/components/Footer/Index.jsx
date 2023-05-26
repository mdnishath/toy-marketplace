import React from "react";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="">
      <footer className="pt-16 pb-4 bg-link">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link to={"/"} className="flex font-bold items-center gap-2">
                <IoCarSportSharp className="text-4xl" />
                <p className="text-xl uppercase">Car Galaxy</p>
              </Link>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="flex flex-col">
                <span className="font-bold text-xl mb-5 text-black">
                  Quick links
                </span>
                <Link to={"/toys"} className="link link-hover">
                  All Toys
                </Link>
                <Link to={"/my-toys"} className="link link-hover">
                  My Toys
                </Link>
                <Link to={"/blog"} className="link link-hover">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="flex flex-col">
                <span className="font-bold text-xl mb-5 text-black">
                  Social Profile
                </span>
                <div className="flex gap-4 text-xl">
                  <Link to={"#"} className="link link-hover">
                    <BsFacebook />
                  </Link>
                  <Link to={"#"} className="link link-hover">
                    <BsInstagram />
                  </Link>
                  <Link to={"#"} className="link link-hover">
                    <BsTwitter />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <div className="flex flex-col">
                <span className="font-bold text-xl mb-5 text-black">
                  Contact Us
                </span>
                <Link to={"#"} className="link link-hover">
                  +8801767591988
                </Link>
                <Link to={"#"} className="link link-hover">
                  info@nishath.com
                </Link>
                <Link to={"#"} className="link link-hover">
                  House 724, Palashbari
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4 px-4 md:px-0">
            <p>Copyright © 2023 - All rights reserved by ACME Industries Ltd</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
