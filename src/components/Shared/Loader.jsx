import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 z-40 w-full h-screen flex items-center justify-center bg-white">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
