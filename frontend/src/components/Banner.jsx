const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 px-4  gap-8">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-3xl md:text-5xl font-bold leading-snug text-gray-800 dark:text-white">
          Hello, welcome here to <br />
          learn something <span className="text-blue-500">new every day</span>
        </p>
        <p className="text-gray-600 mt-5 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod, repellat?
        </p>

        <div className="w-full md:w-auto mt-5">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>

        <div className="flex justify-center md:justify-start mt-5">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="../public/banner.png"
          alt="banner"
          className="w-[80%] h-auto rounded-lg "
        />
      </div>
    </div>
  );
};

export default Banner;
