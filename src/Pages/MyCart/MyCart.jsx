import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import CartProduct from "../CartProduct/CartProduct";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../Footer/Footer";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const loadedCart = useLoaderData();

  const [currentCart, setCurrentCart] = useState(loadedCart);

  useEffect(() => {
    if (user) {
      const filterEmail = loadedCart.filter(
        (cartEmail) => cartEmail.userEmail === user.email
      );
      setCurrentCart(filterEmail);
    }
  }, [loadedCart, user]);

  return (
    <div className="bg-gradient-to-r from-[#070707] from-10% via-[#082718ec] via-50% to-[#1c1b1b] to-90% ...">
      <div className=" min-h-screen">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="py-5">
            <Navbar></Navbar>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-center my-10 text-[#CCCCCC]">
              My Product
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentCart.map((cart) => (
                <CartProduct
                  setCurrentCart={setCurrentCart}
                  currentCart={currentCart}
                  cart={cart}
                  key={cart._id}
                ></CartProduct>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyCart;
