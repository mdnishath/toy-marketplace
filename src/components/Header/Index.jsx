import React from "react";
import Container from "../Shared/Container";
import { IoCarSportSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();

  //Logout
  return (
    <nav className="shadow-md py-4 bg-link uppercase">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Link className="flex items-center gap-2">
            <IoCarSportSharp className="text-4xl" />
            <p className="text-xl uppercase">Car Galaxy</p>
          </Link>
          <div className="flex-grow flex flex-col md:flex-row gap-4">
            <ul className="flex-grow flex justify-end items-center md:text-lg font-semibold gap-4 text-sm">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/all-toys"}>All Toys</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
            </ul>
            <div>
              {user ? (
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <ul className="flex gap-4 md:text-lg text-sm font-semibold uppercase">
                    <li>
                      <Link to={"/my-toys"}>My Toys</Link>
                    </li>
                    <li>
                      <Link to={"/add-toy"}>Add Toy</Link>
                    </li>
                  </ul>
                  <div className="flex gap-3 items-center">
                    <figure>
                      <img
                        className="w-[40px] h-[40px] rounded-full ring-2 ring-white"
                        src={user.photoURL}
                        alt=""
                      />
                    </figure>
                    <button
                      onClick={() => logOut()}
                      className="bg-btn border-0 text-primary px-6 py-2 rounded-lg font-bold uppercase"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Link
                    to={"/login"}
                    className="bg-btn border-0 text-primary px-6 py-2 rounded-lg font-bold uppercase"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
