import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import Banner from "../Header/Banner/Banner";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Progressbar from "../Progressbar/Progressbar";
import Ratings from "../Ratings/Ratings";
import BottomBanner from "../bottomBanner/BottomBanner";
import News from "../News/News";

const Home = () => {
  const allBrands = useLoaderData();
  return (
    <div>
      <div className="bg-[url('/public/banner.jpg')] bg-cover bg-center ">
        <div className=" min-w-full bg-gradient-to-r from-[#0c191351] to-[#051a1080]  min-h-[90vh]">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="py-5">
              <Navbar></Navbar>
            </div>
            <div>
              <Banner></Banner>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8">
        <div>
          <Brands brands={allBrands}></Brands>
        </div>
        <div>
          <Progressbar></Progressbar>
        </div>
        <div>
          <Ratings></Ratings>
        </div>
        <div>
          <News></News>
        </div>
      </div>
      <div>
        <BottomBanner></BottomBanner>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
