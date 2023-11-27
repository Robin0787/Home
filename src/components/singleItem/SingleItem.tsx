import { FiExternalLink } from "react-icons/fi";

type Item = {
  name: string;
  logo: string;
  url: string;
  category: string;
  ring: boolean;
};

const SingleItem = (item: Item) => {
  const { logo, name, url, category, ring } = item;
  return (
    <div className="bg-white/10 rounded-[14px]">
      <div className="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
        <div className="w-full h-full">
          {/* Logo Field */}
          <div className="w-full py-3">
            <img
              src={logo}
              alt="logo"
              className={`h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ${
                ring ? "ring-[14px] rounded-full" : "ring-[10px] rounded-[8px]"
              } ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300`}
              onClick={() => {
                window.open(url);
              }}
            />
          </div>
          {/* Name Field */}
          <div className="w-full mt-4">
            <div
              className="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden"
              onClick={() => {
                window.open(url);
              }}
            >
              <h3 className="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                {name}
              </h3>
            </div>
          </div>
          {/* Link Field */}
          <div className="mt-2 w-full flex justify-between items-center gap-1">
            <div className="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
              <h4 className="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                {url}
              </h4>
            </div>
            <div
              className="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer"
              onClick={() => {
                window.open(url);
              }}
            >
              <FiExternalLink size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
