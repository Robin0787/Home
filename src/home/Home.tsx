import MainItems from "../components/mainItems/MainItems";
import SideMenu from "../components/sideMenu/SideMenu";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-[#e9e9e9] text-black p-5 home">
        <section className="h-full w-full relative">
          <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] 2xl:w-[18%] aside1">
            <SideMenu />
          </aside>
          <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[78%]  aside2">
            <MainItems />
          </aside>
        </section>
      </section>
    </>
  );
};

export default Home;
