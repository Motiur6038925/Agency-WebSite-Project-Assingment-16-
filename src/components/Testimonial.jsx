async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Testimonial List Calling Fail");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
    <section className="bg-white mt-[10px] p-20">
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
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center lg:text-left">
              <span className="text-[#20B15A] text-[20px] font-bold">
                TESTIMONIAL LIST
              </span>

              <h2 className="text-[30px]  font-bold leading-normal">
                Better Agency/SEO Solution At
              </h2>
              <h2 className="text-[30px] font-bold leading-normal">
                Your Fingertips
              </h2>
            </div>
          </div>
          <div>
            <div className=" container  mx-auto   ">
              <div className=" grid grid-cols-3 grid-rows-1 gap-8  ">
                {data.map((item, i) => {
                  return (
                    <div key={i} className="w-full  p-2">
                      <div className="flex pb-12 relative   flex-col items-center   shadow-lg">
                        <div className=" p-5  ">
                          <img
                            alt="gallery"
                            className=" w-[100px] items-center block h-[100px]  rounded-2xl object-cover object-center shadow-xl "
                            src={item["image"]}
                          />
                        </div>
                        <p className="text-gray-500 font-normal mb-5 text-[16px] text-center">
                          {item["msg"]}
                        </p>
                        <div>
                          <h3 className="text-[24px]  text-center font-bold text-[#101A29]    ">
                            {item["name"]}
                          </h3>
                          <h6 className=" text-[16px] text-[#000000]">
                            Backend Developer
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
