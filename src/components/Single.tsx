const Single = ({ logo, name, url }) => {
  return (
    <div className="bg-white/10 rounded-[14px]">
      <div className="h-full py-5 px-3 overflow-hidden">
        <div className="w-full h-full ">
          <div className="w-full py-3">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 object-cover object-center mx-auto ring-[14px] ring-[#ffffff30] rounded-full hover:ring-[#ffffff50] cursor-pointer duration-300"
              onClick={() => {
                window.open(url);
              }}
            />
          </div>
          <div className="w-full mt-4">
            <div className="w-full bg-[#ffffff15] py-1 px-3 rounded-[10px] text-center">
              <h3 className="text-lg font-semibold tracking-[0.5px] text-white">
                {name}
              </h3>
            </div>
          </div>
          <div className="mt-2 w-full flex justify-between items-center gap-1">
            <div className="w-[85%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden">
              <h4 className="text-xs  tracking-[0.5px] text-primary">{url}</h4>
            </div>
            <div
              className="w-[15%] p-[6px] bg-[#ffffff20] rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer"
              onClick={() => {
                window.open(url);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-4 h-4"
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

export default Single;
