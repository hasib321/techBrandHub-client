import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsdetailsCard from "./BrandProductsdetailsCard";
import Slider from "../Slider/Slider";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const BrandProductDetails = () => {
  const { brandName } = useParams();
  const brandProducts = useLoaderData();

  return (
    <div className="bg-gradient-to-r from-[#070707] from-10% via-[#082718ec] via-50% to-[#1c1b1b] to-90% ...">
      <div className="py-5 max-w-screen-xl mx-auto px-8">
        <Navbar></Navbar>
      </div>
      <Slider></Slider>
      <div className="max-w-screen-xl mx-auto px-8">
        <div>
          <h1 className="text-5xl font-bold text-center py-16 text-[#CCCCCC]">
            Our products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center pb-24">
          {brandProducts.length > 0 ? (
            brandProducts.map((brandProduct) => (
              <BrandProductsdetailsCard
                brandProduct={brandProduct}
                key={brandProduct._id}
              ></BrandProductsdetailsCard>
            ))
          ) : (
            <div className="col-span-2 mt-5">
              <h1 className="text-center text-yellow-400 text-3xl">
                currently no products available
              </h1>
              <p className="text-white">
                We apologize, but it seems that there are currently no products
                available in this brand or category. Please feel free to explore
                other sections of our website or check back later for updates.
                If you have any specific product inquiries, don't hesitate to
                contact our support team for assistance.
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BrandProductDetails;
