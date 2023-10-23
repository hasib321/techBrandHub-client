const Progressbar = () => {
  return (
    <div>
      <div>
        <div className="text-center  space-y-10 my-24">
          <h1 className="text-5xl font-bold">
            Technology and Electronics Advancements
          </h1>
          <p className="lg:px-60">
            In a rapidly evolving world of technology and electronics, staying
            up-to-date the latest advancements is crucial. This section offers a
            glimpse into the progress brands in the industry.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center ">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 92 }}
            >
              92%
            </div>
            <div className="mt-5">
              <h1 className=" text-xl">Apple Development</h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 95 }}
            >
              95%
            </div>

            <div className="mt-5">
              <h1 className=" text-xl">Samsung Innovation</h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 97 }}
            >
              97%
            </div>
            <div className="mt-5">
              <h1 className=" text-xl">Google Expansion</h1>
            </div>
          </div>
          <div className="text-center">
            <div
              className="radial-progress bg-primary text-center text-primary-content border-4 border-primary"
              style={{ "--value": 90 }}
            >
              90%
            </div>
            <div className="mt-5">
              <h1 className=" text-xl">Tesla Milestones</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
