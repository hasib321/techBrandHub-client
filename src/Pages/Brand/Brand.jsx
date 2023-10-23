import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, image } = brand;

  return (
    <div>
      <div></div>
      <div>
        <div className="relative ">
          <figure className=" h-64">
            <img className="w-full h-full rounded-md" src={image} alt="Shoes" />
          </figure>

          <div className="absolute bottom-5  left-1">
            <Link
              to={`/products/${name}`}
              className=" text-white  bg-[#02c185f6] px-7 py-3 rounded-full font-semibold text-center"
            >
              {name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
