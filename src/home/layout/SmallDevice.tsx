import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import MainItems from "../../components/mainItems/MainItems";
import SideMenu from "../../components/sideMenu/SideMenu";

const SmallDevice = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <section className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
      <aside className="w-full h-[10%] flex justify-start items-center bg-white/10 text-primary overflow-hidden rounded-[12px] p-2">
        {/* Navbar section */}
        <div className="flex justify-between items-center gap-3 w-full py-[2px] px-2">
          <div className="flex justify-start items-center gap-1 md:gap-3">
            <BiLink size={30} />
            <h1 className="text-xl font-bold whitespace-nowrap">Site Saver</h1>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setShowSideMenu((prev) => !prev);
            }}
          >
            {showSideMenu ? <RxCross2 size={25} /> : <FaBars size={25} />}
          </div>
        </div>
        {/* Menu list for small devices */}
        <section
          className={`h-full absolute top-0 right-0 ${
            showSideMenu ? "w-full sm:w-[50%] md:w-[30%]" : "w-0"
          } duration-300 home rounded-[12px] z-20`}
        >
          <div className="h-full w-full rounded-[12px] relative overflow-hidden">
            <SideMenu onMobile={true} cancelFn={setShowSideMenu} />
          </div>
        </section>
      </aside>
      <aside className="w-full aside2 h-[90%]">
        <MainItems />
      </aside>
    </section>
  );
};

export default SmallDevice;
