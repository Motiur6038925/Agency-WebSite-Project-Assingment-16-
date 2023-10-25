import React from "react";

const Navigation = ({ title }) => {
  return (
    <section className=" bg-[#D7F5DC] py-[30px]">
      <div className="pt-[200px] pb-[100px] container mx-auto">
        <h1 className=" text-[40px] font-bold">{title}</h1>

        <nav className="w-full rounded-md">
          <ol className="list-reset flex items-center gap-[15px]">
            <li>
              <a
                href="#"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Home
              </a>
            </li>
            <li>
              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.6875 5.8125C8.09375 6.1875 8.09375 6.84375 7.6875 7.21875L2.6875 12.2188C2.3125 12.625 1.65625 12.625 1.28125 12.2188C0.875 11.8438 0.875 11.1875 1.28125 10.8125L5.5625 6.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L7.6875 5.8125Z"
                  fill="#101A29"
                />
              </svg>
            </li>
            <li>
              <a
                href="#"
                className="  text-[#20B15A] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                {title}
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
