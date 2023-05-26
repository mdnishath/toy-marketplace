import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import UpdateToyModal from "./UpdateToyModal";

const MyToys = () => {
  const { user, loading, setLoading } = useAuth();
  const [loaderData, setLoaderData] = useState({});
  const [order, setOrder] = useState("desc");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-lime.vercel.app/toys?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  useEffect(() => {
    document.title = "CAR GALAXY || My Toys ";
  }, []);

  //Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-lime.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(id);
              const remainingToys = toys.filter((toy) => toy._id !== id);
              //   console.log(remainingToys);
              setToys(remainingToys);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    fetch(`https://toy-marketplace-server-lime.vercel.app/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setLoaderData(data));
  };
  const handleOrderChange = (e) => {
    const sortBy = e.target.value;
    fetch(`https://toy-marketplace-server-lime.vercel.app/sort?sort=${sortBy}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <Container>
        <UpdateToyModal toy={loaderData} setToys={setToys} toys={toys} />
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-center">My Toys</h1>
          <div>
            <div className="flex items-center">
              <label htmlFor="order-select" className="mr-2">
                Order:
              </label>
              <select
                id="order-select"
                defaultValue={order}
                onChange={handleOrderChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
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
                        <td className="flex gap-3">
                          <label
                            onClick={() => handleUpdate(toy._id)}
                            htmlFor="update-modal"
                            className="bg-link px-4 py-2 rounded-lg font-semibold"
                          >
                            Update
                          </label>
                          <button
                            onClick={() => handleDelete(toy._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
                          >
                            Delete
                          </button>
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

export default MyToys;
