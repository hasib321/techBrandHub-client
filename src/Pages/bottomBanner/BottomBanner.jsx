import { BsFillCheckCircleFill } from "react-icons/bs";

const BottomBanner = () => {
  return (
    <div>
      <div className="bg-[url('/bottomBanner.jpg')] bg-cover bg-center min-h-[70vh] static">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-screen">
          <div className="max-w-screen-xl mx-auto py-24 px-10">
            <div>
              <div className="flex justify-center items-center gap-2 mt-10">
                <div className="bg-white h-1 w-14"></div>
                <h1 className="text-[#02c173] font-semibold ">Discover More</h1>
              </div>
            </div>
            <div className="text-white space-y-8 mt-10">
              <h1 className="text-6xl  font-bold">
                Stay Curious, <br /> Stay Informed
              </h1>
              <p>
                Our commitment to keeping you at the forefront of technology and
                electronics drives <br /> us to provide a wealth of knowledge
                and insights. Click here to quench your curiosity <br /> and
                Let's explore the future together.
              </p>
            </div>
            <div
              className="text-white flex gap-20 my-8"
              data-aos="fade"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <ul>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#02c173]"></BsFillCheckCircleFill>
                  Explore More
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#02c173]"></BsFillCheckCircleFill>
                  Discover Now
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#02c173]"></BsFillCheckCircleFill>
                  Shop Here
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
