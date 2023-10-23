import { Link } from "react-router-dom";

const BrandProductsdetailsCard = ({ brandProduct }) => {
  const { _id, name, type, price, shortDescription, rating, image, brandName } =
    brandProduct;
  return (
    <div>
      <div>
        {/* product card */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full md:w-80  h-72">
            <img className="w-full h-full" src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Type:{type}</p>
            <p>Price:{price} $</p>
            <p>Rating:{rating}</p>
            <p>BrandName:{brandName}</p>
            <div className="flex gap-2">
              <div className="mt-7">
                <Link
                  to={`/products/${brandName}/${_id}`}
                  className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
                >
                  Details
                </Link>
              </div>
              <div className="mt-7">
                <Link
                  to={`/products/updateProduct/${_id}`}
                  className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductsdetailsCard;
