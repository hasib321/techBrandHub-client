import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SingleProducts = () => {
  const { user } = useContext(AuthContext);

  //for previous page
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };

  //getting single id and info from database
  const { id } = useParams();
  const products = useLoaderData();
  const { name, type, price, shortDescription, rating, image, brandName } =
    products;

  const handleAddToCart = () => {
    const userEmail = user.email;

    const brandUser = {
      userEmail,
      name,
      type,
      price,
      shortDescription,
      rating,
      image,
      brandName,
    };
    fetch(`http://localhost:5000/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Yahooo!", "Product Added Successfully in Cart", "success");
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{shortDescription}</p>

            <div className="space-y-2 mt-3">
              <h1 className="text-base ">
                <span className="text-2xl"> Price: </span>
                {price} $
              </h1>
            </div>
            <div className="space-y-2 mt-3">
              <h1 className="text-base ">
                <span className="text-2xl "> Type: </span>
                {type}
              </h1>
            </div>
            <div className="space-y-2 mt-3">
              <h1 className="text-base ">
                <span className="text-2xl "> Rating: </span>
                {rating}
              </h1>
            </div>
            <div className="mt-5 space-x-2">
              <button
                onClick={previousPage}
                className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
              >
                Back
              </button>

              <button
                onClick={handleAddToCart}
                className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
