import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  return res.json();
}

async function getData2() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();
  const data2 = await getData2();

  return (
    <div>
      <section className=" relative bg-[#D7F5DC] pb-[30px] py-[70px]">
        <div className=" relative  pt-12 lg:pt-20 pb-20 z-10">
          <div className=" container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                      <span>{data["title"]}</span>
                      <span className="text-green-600">problems</span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-[#000]  text-[20px] font-medium leading-loose">
                      {data["description"]}
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        How it works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  w-full lg:w-1/2  mt-[51px] ">
                <div className=" grid grid-cols-3 gap-[18px]   ">
                  <div className="col-span-2    w-full h-[270px] overflow-hidden   rounded-[10px] ">
                    <img
                      className=" w-full h-full object-cover"
                      src={data["image1"]}
                      alt=""
                    />
                  </div>    

                  <div className=" col-span-1  w-full  h-[270px] overflow-hidden rounded-[10px] ">
                    <img
                      className="w-full h-full object-cover "
                      src={data["image2"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-3 gap-[18px] mt-[22px] ">
                  <div className=" col-span-1  w-full   h-[164px] overflow-hidden  rounded-[10px]">
                    <img
                      className=" w-full h-full object-cover "
                      src={data["image4"]}
                      alt=""
                    />
                  </div>

                  <div className=" col-span-2 w-full h-[164px] overflow-hidden rounded-[10px] ">
                    <img
                      className="  w-full h-full object-cover "
                      src={data["image3"]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10  bg-[#F8FFF9]  ">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap -mx-2">
              {data2.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
                  >
                    <div>
                      <img className="mx-auto h-8" src={item["image"]} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
