import Swal from "sweetalert2";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = form.brand.value.toUpperCase();
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const newProduct = {
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      image,
    };

    console.log(newProduct);

    // send data to the server
    fetch(
      " https://technology-brand-kmb6k88ol-md-hasibuzzamans-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Yahooo!", "Product Added Successfully", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="bg-gradient-to-r from-[#070707] from-10% via-[#082718ec] via-50% to-[#1c1b1b] to-90% ...">
      <div className=" min-h-screen">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="py-5">
            <Navbar></Navbar>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-center my-10 text-[#CCCCCC]">
              Add Product
            </h2>
            <form onSubmit={handleAddProduct}>
              {/* form name */}
              <div className="md:flex gap-5 mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]"> Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">
                      Brand Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="brand"
                      placeholder="Brand Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:flex  gap-5 mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">Type</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="type"
                      placeholder="Type"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form category and details row */}
              <div className="md:flex  gap-5 mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">
                      Short Description
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="shortDescription"
                      placeholder="Short Description"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">Rating</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="rating"
                      placeholder="Rating"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form Photo url row */}
              <div className="mb-8  gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-[#CCCCCC]">Image</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="image"
                      placeholder="Image"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Add Product"
                className="text-white bg-[#02c173] px-7 py-3 rounded-full font-semibold w-full cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddProducts;
