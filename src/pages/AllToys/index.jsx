import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Shared/Loader";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import ToyModal from "./ToyModal";
import Swal from "sweetalert2";

const AllToys = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState({});
  const { loading, setLoading, user } = useAuth();
  const limit = 20;

  //Search
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const search = e.target.search.value;
    if (search && toys.length > 0) {
      const filteredToys = toys.filter((toy) =>
        toy.title.toLowerCase().includes(search.toLowerCase())
      );
      setToys(filteredToys);
      setLoading(false);
    } else {
      // Fetch all toys again
      setLoading(true);
      fetch(
        `https://toy-marketplace-server-lime.vercel.app/toyslimit?limit=${limit}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    }
    setLoading(false);
  };
  useEffect(() => {
    document.title = "CAR GALAXY || All Toys ";
  }, []);

  //fetch all toys
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://toy-marketplace-server-lime.vercel.app/toyslimit?limit=${limit}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  //Handle toy details
  const location = useLocation();
  const handleToyDetails = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "You have to log in first to view details",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          const state = { from: location };
          navigate("/login", { state, replace: true });
        }
      });
    } else {
      fetch(`https://toy-marketplace-server-lime.vercel.app/toys/${id}`)
        .then((res) => res.json())
        .then((data) => setToy(data));
    }
  };
  console.log(toy);
  return loading ? (
    <Loader />
  ) : (
    <div>
      {user && <ToyModal toy={toy} />}
      <Container>
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-center">All Toys</h1>
          <p className="text-center text-lg">Total Toys: {toys.length}</p>
          <div className="flex justify-center mt-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className=" border px-5 py-2 border-r-0 rounded-l-lg w-full max-w-xs"
              />
              <input
                className="bg-btn px-5 py-2 rounded-r-lg cursor-pointer"
                type="submit"
                value="Search"
              />
            </form>
          </div>
          <div className="mt-8">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead className="bg-btn">
                  <tr className="">
                    <th>Picture</th>
                    <th>Seller</th>
                    <th>Toy Name</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {toys && toys.length > 0 ? (
                    toys.map((toy) => (
                      <tr key={toy._id}>
                        <td>
                          <figure>
                            <img className="w-16" src={toy.picture} alt="" />
                          </figure>
                        </td>
                        <td>
                          <p>{toy.sellerName}</p>
                        </td>
                        <td>
                          <p>{toy.title}</p>
                        </td>
                        <td>
                          <p>{toy.category}</p>
                        </td>
                        <td>
                          <p>${toy.price}</p>
                        </td>
                        <td>
                          <p>{toy.quantity}</p>
                        </td>
                        <td>
                          <label
                            onClick={() => handleToyDetails(toy._id)}
                            htmlFor="my-modal-3"
                            className="bg-btn px-4 py-2 rounded-lg font-semibold"
                          >
                            View Details
                          </label>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No toys found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllToys;
