import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white mt-16 space-y-8">
      <h2 className="font-semibold text-xl italic">
        Explore the Future of Technology
      </h2>
      <h1 className="text-5xl font-bold">
        Discover the Innovations
        <br /> from Leading Brands
      </h1>
      <p>
        From smartphones to smart homes, stay ahead with the latest tech trends
        and innovations brought <br /> to you by top industry brands. Dive into
        a world of cutting-edge gadgets, revolutionary advancements,
        <br /> and endless possibilities.
      </p>
      <div className="py-6">
        <Link
          to="/register"
          className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
