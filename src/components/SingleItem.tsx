import logo from "../assets/logo/fb.webp";

const SingleItem = () => {
  return (
    <div className="bg-white/10 rounded-[14px]">
      <div className="h-full py-5 px-3 ">
        <div className="w-full h-full overflow-hidden">
          <div className="flex justify-between items-center gap-3">
            <div className="w-[30%]">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-10 object-cover mx-auto"
              />
            </div>
            <div className="w-[80%] bg-[#ffffff12] py-1 px-3 rounded-[10px] text-center">
              <h3 className="text-lg font-semibold tracking-[0.5px] text-white">
                Facebook
              </h3>
            </div>
          </div>
          <div className="mt-3 w-full flex justify-between items-center gap-3">
            <div className="w-[85%] bg-[#ffffff12] py-1 px-3 rounded-[10px] overflow-hidden">
              <h4 className="text-xs font-semibold tracking-[0.5px] text-primary">
                https://www.facebook.com
              </h4>
            </div>
            <div className="w-[15%] px-[6px] bg-[#ffffff12] rounded-[10px] text-center flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
