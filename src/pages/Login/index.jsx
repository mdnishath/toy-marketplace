import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import SocialLogin from "../../components/Shared/SocialLogin";
import ErrorMessage from "../../components/Shared/ErrorMessage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { login } = useAuth();
  useEffect(() => {
    document.title = "CAR GALAXY || Login ";
  }, []);
  //handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (!email) {
      setError("Email can not be empty");
    } else if (!password) {
      setError("Password can not be empty");
    } else {
      try {
        await login(email, password);
        navigate(from, { replace: true });
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <div className="py-20 bg-gray-100">
      <Container>
        <h1 className="text-3xl font-semibold text-center">
          Please Login Here
        </h1>
        <div className="w-6/12 shadow-lg p-6 rounded-lg bg-white mx-auto my-6">
          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              placeholder="Your email address..."
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="btn bg-btn border-0 text-primary font-bold text-lg hover:bg-btn"
            >
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <div className="flex gap-4"></div>
          <SocialLogin />
          <div className="flex justify-center mt-3">
            Don't have an account? {""}
            <Link className="text-link ml-2 font-semibold" to={"/signup"}>
              Create an account
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            {error && <ErrorMessage message={error} />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
