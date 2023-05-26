import React from "react";
import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import Container from "../../components/Shared/Container";
const ToyModal = ({ toy }) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <Container>
          <div className="relative bg-white rounded-lg">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-btn border-btn text-black"
            >
              ✕
            </label>
            <div className="w-full">
              <div className="grid grid-cols-12  my-8 p-5 gap-8 items-center">
                <div className="col-span-4">
                  <figure>
                    <img
                      className="w-[400px]"
                      src={toy.picture}
                      alt={toy.title}
                    />
                  </figure>
                </div>
                <div className="col-span-8">
                  <h1 className="text-2xl font-semibold">{toy?.title}</h1>
                  <p className="py-4 text-lg">{toy?.description}</p>
                  <div className="">
                    <div className="flex gap-6">
                      <div className="flex gap-1 items-center">
                        <p className="text-lg font-semibold">Price:</p>

                        <h2 className="text-lg">${toy?.price}</h2>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p className="text-lg font-semibold">Quantity:</p>
                        <p className="text-lg">{toy?.quantity}</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p className="text-lg font-semibold">Rating:</p>
                        <Rating
                          style={{ maxWidth: 150 }}
                          value={toy?.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-xl font-semibold my-3">Seller info:</p>
                    <div className="flex gap-6">
                      <div className="flex gap-3 items-center">
                        <FaUserAlt className="text-xl text-btn" />

                        <h2 className="text-lg">{toy?.sellerName}</h2>
                      </div>
                      <div className="flex gap-3 items-center">
                        <MdEmail className="text-xl text-btn" />
                        <p className="text-lg">{toy?.sellerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ToyModal;
