import React, { useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyModal from "../../AllToys/ToyModal";
import useAuth from "../../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

const CategoryTab = () => {
  const toys = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const [toy, setToy] = useState({});

  const { user } = useAuth();
  // Group products by category (lowercase)
  const productsByCategory = toys.reduce((acc, product) => {
    const lowercaseCategory = product.category.toLowerCase();
    if (lowercaseCategory in acc) {
      acc[lowercaseCategory].push(product);
    } else {
      acc[lowercaseCategory] = [product];
    }
    return acc;
  }, {});

  // Get unique lowercase categories
  const categories = Object.keys(productsByCategory);

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

  return (
    <div className="bg-white p-5">
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab key={category}>
              <p className="uppercase">{category}</p>
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productsByCategory[category].map((product) => (
                <div
                  key={product._id}
                  className="card card-compact bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={product.picture}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.sellerEmail}</p>
                    <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center">
                      <div className="flex gap-1 items-center">
                        <p className="text-lg font-semibold">Price:</p>
                        <h2 className="text-lg">${product?.price}</h2>
                      </div>
                      <div className="flex gap-1 md:gap-3 items-center">
                        <p className="text-lg font-semibold">Rating:</p>
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={product?.rating}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <label
                        onClick={() => handleToyDetails(product._id)}
                        htmlFor="my-modal-3"
                        className="bg-btn px-4 py-2 rounded-lg font-semibold"
                      >
                        View Details
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {user && <ToyModal toy={toy} />}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTab;
