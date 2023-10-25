async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllService List Calling Fail");
  }
  return res.json();
}

const Services = async () => {
  const data = await getData();

  return (
    <section className="bg-white mt-[10px] py-[40px]">
      <div className="skew skew-top mr-for-radius">
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
      <div className="py-20 bg-white radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="mb-16  flex flex-wrap justify-center md:justify-between items-center ">
            <div className="text-center lg:text-left">
              <span className="text-[#20B15A] text-[20px] font-bold">
                {/* Our All Services */}

                {data[0].tag}
              </span>

              <h2 className="text-[30px]  font-bold leading-normal">
                We Provide BestWeb design
              </h2>
              <h2 className="text-[30px] font-bold leading-normal">services</h2>
            </div>
          </div>
          <div>
            <div className=" container  mx-auto   ">
              <div className=" grid grid-cols-2 grid-rows-1 gap-4  ">
                <div className="w-full  shadow-2xl ">
                  <div className="flex w-2/2 flex-wrap  p-[50px] ">
                    <h3 className="text-[24px] font-bold text-[#101A29] p-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-500 font-normal mb-5 p-2">
                      {data[0].des}
                    </p>

                    <div className="w-2/3 p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image1}
                      />
                    </div>
                    <div className="w-1/3 p-2  ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image2}
                      />
                    </div>
                    <div className="w-1/2 p-2  ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image3}
                      />
                    </div>
                    <div className="w-1/2 p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image4}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full  shadow-2xl">
                  <div className="flex w-2/2 flex-wrap  p-[50px] shadow-lg">
                    <h3 className="text-[24px] font-bold text-[#101A29] p-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-500 font-normal mb-5 p-2">
                      {data[0].des}
                    </p>

                    <div className="w-2/3  p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image1}
                      />
                    </div>
                    <div className="w-1/3 p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image2}
                      />
                    </div>
                    <div className="w-1/2  p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image3}
                      />
                    </div>
                    <div className="w-1/2 p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image4}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full  shadow-2xl">
                  <div className="flex w-2/2 flex-wrap p-[50px] shadow-lg">
                    <h3 className="text-[24px] font-bold text-[#101A29] p-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-500 font-normal mb-5 p-2">
                      {data[0].des}
                    </p>

                    <div className="w-2/3 p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image1}
                      />
                    </div>
                    <div className="w-1/3  p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image2}
                      />
                    </div>
                    <div className="w-1/2 p-2 ">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image3}
                      />
                    </div>
                    <div className="w-1/2 p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image4}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full  shadow-2xl ">
                  <div className="flex w-2/2 flex-wrap p-[50px] shadow-lg">
                    <h3 className="text-[24px] font-bold text-[#101A29] p-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-500 font-normal mb-5 p-2">
                      {data[0].des}
                    </p>

                    <div className="w-2/3  p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image1}
                      />
                    </div>
                    <div className="w-1/3  p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image2}
                      />
                    </div>
                    <div className="w-1/2  p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image3}
                      />
                    </div>
                    <div className="w-1/2 p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={data[0].image4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
