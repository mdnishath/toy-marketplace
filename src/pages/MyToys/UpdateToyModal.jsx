import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Swal from "sweetalert2";
import { produce } from "immer";

const UpdateToyModal = ({ toy, toys, setToys }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const picture = form.picture.value;
    const newToy = {
      title,
      category,
      price,
      rating,
      quantity,
      description,
      picture,
    };
    fetch(`https://toy-marketplace-server-lime.vercel.app/toys/${toy._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your Toy updated",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }
      });
  };
  console.log(toys);
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <Container>
          <div className="relative bg-white rounded-lg w-[600px] p-4">
            <label
              htmlFor="update-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-btn border-btn text-black"
            >
              ✕
            </label>

            <div className="my-8 w-full">
              <h1 className="text-3xl font-semibold text-center">
                Update your toy
              </h1>
              <div className="w-full p-6 rounded-lg bg-white mx-auto my-6">
                <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.title}
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="category"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.category}
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="price"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.price}
                  />
                  <input
                    type="number"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.rating}
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="quantity"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.quantity}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.description}
                  />
                  <input
                    type="url"
                    name="picture"
                    placeholder="picture"
                    className="input input-bordered w-full"
                    required
                    defaultValue={toy?.picture}
                  />

                  <button
                    type="submit"
                    className="btn bg-btn border-0 text-primary font-bold text-lg hover:bg-btn"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UpdateToyModal;
