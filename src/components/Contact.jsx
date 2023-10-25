import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-white py-[40px] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className=" text-[20px]  not-italic  font-medium text-[#20B15A]  ">
              SUBSCRIBE
            </h2>
            <p className="mx-auto  text-[30px]   text-[#000000]  font-semibold ">
              Subscribe to get the latest
            </p>
            <p className="mx-auto  text-[30px]   text-[#000000]  font-semibold ">
              news about us
            </p>
            <p className="mx-auto mb-8  text-[16px]  font-medium text-gray-500  ">
              Please drop your email below to get daily update about what we do
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    for="email"
                    className="hidden mb-2 text-sm font-medium text-black "
                  >
                    Please drop your email below to get daily update about what
                    we do
                  </label>
                  <div className="flex  inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <div className=" relative flex justify-center items-center">
                    <input
                      className="block p-3 pl-10 w-[596px] text-sm text-gray-900   bg-gray-50 rounded-[14px] border border-gray-300  focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />

                    <button
                      type="submit"
                      className=" absolute  left-[61%]  h-[42.703px]   py-2 px-5  text-sm font-medium text-center text-white  border cursor-pointer bg-[#F55F1D] border-primary-600 rounded-[14px] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>

                    <div></div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                ></a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
