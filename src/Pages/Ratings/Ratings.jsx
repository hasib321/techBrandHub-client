const Ratings = () => {
  return (
    <div className="py-24">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center space-y-7">
          <h1 className="text-6xl font-bold">Tech and Electronics Ratings</h1>
        </div>

        <div className=" text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-5">
          <div className="hover:bg-[#3D087B] hover:text-white border border-green-700 py-8">
            <h1 className="text-[#02c173] text-6xl font-bold">4.8</h1>
            <p className="text-xl font-semibold">Product Ratings</p>
          </div>
          <div className="hover:bg-[#3D087B] hover:text-white border border-green-700 py-8">
            <h1 className="text-[#02c173] text-6xl font-bold">4.9</h1>
            <p className="text-xl  font-semibold">Innovation Ratings</p>
          </div>
          <div className="hover:bg-[#3D087B] hover:text-white border border-green-700 py-8">
            <h1 className="text-[#02c173] text-6xl font-bold">4.8</h1>
            <p className="text-xl font-semibold">Gadget Ratings </p>
          </div>
          <div className="hover:bg-[#3D087B] hover:text-white border border-green-700 py-8">
            <h1 className="text-[#02c173] text-6xl font-bold">4.7</h1>
            <p className="text-xl font-semibold">Hardware Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
