import Swal from "sweetalert2";

const CartProduct = ({ cart, setCurrentCart, currentCart }) => {
  const {
    _id,
    name,
    type,
    price,
    shortDescription,
    rating,
    image,
    brandName,
    userEmail,
  } = cart;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = currentCart.filter(
            (product) => product._id !== _id
          );
          setCurrentCart(remaining);
          Swal.fire("Deleted!", "Your product has been deleted", "success");
        }
      });
  };
  return (
    <div>
      <div className="border p-5 hover:bg-[#3d087b]">
        <div className="h-[250px] ">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="space-y-5">
          <div className="mt-5 flex justify-between items-center">
            <h5 className="text-xl font-semibold text-white ">{name}</h5>
            <span className="text-xl font-bold text-white">
              Price:{price} $
            </span>
          </div>
          <div className="text-white">
            <h1>
              <span className="font-semibold">Brand Name:</span> {brandName}
            </h1>
            <h1>
              <span className="font-semibold">Type: </span>
              {type}
            </h1>
            <h1>
              <span className="font-semibold">rating: </span>
              {rating}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleDelete(_id)}
              className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
