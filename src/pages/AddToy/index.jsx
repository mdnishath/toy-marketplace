import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useAuth();
  useEffect(() => {
    document.title = "CAR GALAXY || Add Toy ";
  }, []);
  //add toy
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const picture = form.picture.value;

    fetch("https://toy-marketplace-server-lime.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        price,
        rating,
        quantity,
        description,
        picture,
        sellerName: user.displayName,
        sellerEmail: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your toy added",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              form.reset();
            }
          });
        }
      });
  };
  return (
    <div>
      <Container>
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-center">Add Your Toy</h1>
          <div className="w-6/12 shadow-lg p-6 rounded-lg bg-white mx-auto my-6">
            <form onSubmit={handleAddToy} className="flex flex-col gap-2">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
                required
              />
              <input
                type="url"
                name="picture"
                placeholder="picture"
                className="input input-bordered w-full"
                required
              />

              <button
                type="submit"
                className="btn bg-btn border-0 text-primary font-bold text-lg hover:bg-btn"
              >
                Add Toy
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddToy;
