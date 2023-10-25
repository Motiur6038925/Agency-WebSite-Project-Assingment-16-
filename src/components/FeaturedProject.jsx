async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  return (
    <section className=" bg-[#D7F5DC] py-[100px]">
      <div className="skew skew-top mr-for-radius ">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-[80px] bg-[#D7F5DC] radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center lg:text-left">
              <span className="text-[#20B15A] text-[20px] font-bold">
                Featured Project
              </span>

              <h2 className="text-4xl lg:text-[30px] font-bold  leading-normal">
                We provide the Perfect Solution
              </h2>
              <h2 className="text-4xl lg:text-[30px] font-bold  leading-normal">
                to your business growth
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-4"></div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <a target="_blank" href={data[0].live}>
                  <img
                    className="w-[603px] h-[531px] rounded-[20px] shrink-0"
                    src={data[0].image}
                    alt=""
                  />
                </a>

                <p className="text-gray-500">App Design - June 20, 2022</p>
                <h3 className="text-2xl font-bold">App Redesign</h3>
              </div>

              <div className=" grid grid-cols-2 gap-2">
                <div>
                  <a target="_blank" href={data[0].live}>
                    <img
                      className="w-[287px] h-[188px] rounded-[20px] shrink-0"
                      src={data[0].image}
                      alt=""
                    />
                  </a>

                  <p className="text-gray-500">App Design - June 20, 2022</p>
                  <h3 className="text-2xl font-bold">App Redesign</h3>
                </div>
                <div>
                  <a target="_blank" href={data[0].live}>
                    <img
                      className="w-[287px] h-[188px] rounded-[20px] shrink-0"
                      src={data[0].image}
                      alt=""
                    />
                  </a>

                  <p className="text-gray-500">App Design - June 20, 2022</p>
                  <h3 className="text-2xl font-bold">App Redesign</h3>
                </div>

                <div>
                  <a target="_blank" href={data[0].live}>
                    <img
                      className="w-[287px] h-[188px] rounded-[20px] shrink-0"
                      src={data[0].image}
                      alt=""
                    />
                  </a>

                  <p className="text-gray-500">App Design - June 20, 2022</p>
                  <h3 className="text-2xl font-bold">App Redesign</h3>
                </div>
                <div>
                  <a target="_blank" href={data[0].live}>
                    <img
                      className="w-[287px] h-[188px] rounded-[20px] shrink-0"
                      src={data[0].image}
                      alt=""
                    />
                  </a>

                  <p className="text-gray-500">App Design - June 20, 2022</p>
                  <h3 className="text-2xl font-bold">App Redesign</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
