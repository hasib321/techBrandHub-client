import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { MdAddIcCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black">
        <div className="text-white grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-10 px-10 pt-20 ">
          <div className=" lg:col-span-2  border-r mt-5 px-3">
            <div>
              <img className="w-40" src="/logo.png" alt="" />
            </div>
            <div>
              Discover the heart of our digital hub at the bottom of the page.
              In our footer, you'll find a wealth of information, from contact
              details to essential links and social connections.
            </div>
          </div>

          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Quick Links</h1>
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/addProducts">
                  Add Product
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/myCart">
                  My Cart
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="flex items-center gap-3 ">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Latest Item</h1>
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                Smart Speaker
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                Wireless Earbuds
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                Gaming Console
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                Tablet PC
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#02c173] text-xl"></BsFillArrowRightCircleFill>
                Home Router
              </li>
            </ul>
          </div>

          <div className="mt-5 px-2 border-r">
            <div>
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="mt-5">
              <p>Savar,Dhaka</p>
            </div>
            <div className="mt-5">
              <p className="flex items-center gap-3 ">
                <MdEmail className="text-[#02c173] text-xl"></MdEmail>
                <span>product@mail.com</span>
              </p>
              <p className="flex items-center gap-3 ">
                <MdAddIcCall className="text-[#02c173] text-xl"></MdAddIcCall>

                <span>+8801011110001</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-10 flex items-center justify-center">
          <p className="text-center text-white text-sm">
            © 2023 - All right reserved by TechBrandHub
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
