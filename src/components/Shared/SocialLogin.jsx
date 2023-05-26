import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  //Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {}
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 border px-8 py-2 rounded-lg text-lg w-full justify-center"
      >
        <FcGoogle className="text-xl" />
        Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
