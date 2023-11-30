import LargeDevice from "./layout/LargeDevice";
import SmallDevice from "./layout/SmallDevice";

const Home = () => {
  return (
    <>
      <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
        {/* For large devices */}
        <LargeDevice />
        {/* For small devices */}
        <SmallDevice />
      </section>
    </>
  );
};

export default Home;
