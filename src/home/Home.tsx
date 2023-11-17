import SideMenu from "../components/sideMenu/SideMenu";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-[#e9e9e9] text-black p-5 home">
        <section className="h-full w-full relative">
          <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] aside1">
            <SideMenu />
          </aside>
          <aside className="fixed left-[24%] top-5 bottom-5 w-[74%] aside2"></aside>
        </section>
      </section>
    </>
  );
};

export default Home;
