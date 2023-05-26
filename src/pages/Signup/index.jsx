import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import SocialLogin from "../../components/Shared/SocialLogin";
import ErrorMessage from "../../components/Shared/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Signup = () => {
  useEffect(() => {
    document.title = "CAR GALAXY || Signup ";
  }, []);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createAccount, updateUser } = useAuth();
  //handle login
  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    setError("");
    if (!email) {
      setError("Email can not be empty");
    } else if (!password) {
      setError("Password can not be empty");
    } else if (!name) {
      setError("Name can not be empty");
    } else if (!photo) {
      setError("Photo url can not be empty");
    } else {
      console.log(name, photo, email, password);
      try {
        const result = await createAccount(email, password);
        console.log(result);
        await updateUser(name, photo);
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Signup Success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <div className="py-20 bg-gray-100">
      <Container>
        <h1 className="text-3xl font-semibold text-center">
          Please Signup Here
        </h1>
        <div className="w-6/12 shadow-lg p-6 rounded-lg bg-white mx-auto my-6">
          <form onSubmit={handleSignup} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address..."
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full"
            />
            <input
              type="url"
              name="photo"
              placeholder="Profile picture"
              className="input input-bordered w-full"
            />

            <button
              type="submit"
              className="btn bg-btn border-0 text-primary font-bold text-lg hover:bg-btn"
            >
              Signup
            </button>
          </form>
          <div className="divider">OR</div>
          <div className="flex gap-4"></div>
          <SocialLogin />
          <div className="flex justify-center mt-4">
            {error && <ErrorMessage message={error} />}
          </div>
          <div className="flex justify-center mt-3">
            Already have an account? {""}
            <Link className="text-link ml-2 font-semibold" to={"/login"}>
              Login here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
