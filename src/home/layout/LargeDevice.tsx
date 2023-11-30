import MainItems from "../../components/mainItems/MainItems";
import SideMenu from "../../components/sideMenu/SideMenu";

const LargeDevice = () => {
  return (
    <section className="hidden lg:block h-full w-full relative">
      <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] 2xl:w-[18%] aside1">
        <SideMenu />
      </aside>
      <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[78%]  aside2">
        <MainItems />
      </aside>
    </section>
  );
};

export default LargeDevice;
