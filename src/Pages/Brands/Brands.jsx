import Brand from "../Brand/Brand";

const Brands = ({ brands }) => {
  return (
    <div>
      <div className="text-center  space-y-10 my-24 ">
        <h1 className="text-5xl font-bold">Explore Top Tech Brands</h1>
        <p>
          Discover the latest and greatest from leading tech brands like Apple,
          Samsung, Sony, Google, Intel, and Tesla. <br /> Dive into a world of
          innovation and cutting-edge technology. Explore now and stay ahead in
          the tech game!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {brands.map((brand) => (
          <Brand brand={brand} key={brand.id}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
