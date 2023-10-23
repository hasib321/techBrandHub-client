const News = () => {
  return (
    <div>
      <div>
        <div className="text-center  space-y-10 my-16">
          <h1 className="text-5xl font-bold">Digital Insights</h1>
          <p className="lg:px-60">
            Unlock the Future of Innovation: Delve into Comprehensive Tech &
            Electronics News, Trends, and Breakthroughs, and Stay at the
            Forefront of the Digital Revolution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-5">
          <div className="bg-[url('/googleoffice.jpg')] bg-cover bg-center min-h-[45vh]">
            <div className=" min-w-full bg-gradient-to-r from-[#0c191351] to-[#051a1080] min-h-full">
              <h1 className="text-white text-2xl font-bold pt-60 px-5">
                Google Opens Cutting-Edge Office in America
              </h1>
            </div>
          </div>
          <div className="bg-[url('/steveJObsjpg.jpg')] bg-cover bg-center min-h-[45vh]">
            <div className=" min-w-full bg-gradient-to-r from-[#0c191351] to-[#051a1080] min-h-full">
              <h1 className="text-white text-2xl font-bold pt-60 px-5">
                Your time is limited...
              </h1>
            </div>
          </div>
          <div className="bg-[url('/meltour.jpg')] bg-cover bg-center min-h-[45vh]">
            <div className=" min-w-full bg-gradient-to-r from-[#0c191351] to-[#051a1080] min-h-full">
              <h1 className="text-white text-2xl font-bold pt-60 px-5">
                Tour of Melbourne Headquarters
              </h1>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default News;
