const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-[#e9e9e9] text-black p-5">
        <section className="h-full w-full relative">
          <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] aside1 p-5">
            <section className="h-full w-full">
              {/* <h1 className="text-2xl px-5">Logo</h1> */}
              <ul className="mt-5 flex flex-col justify-start items-start gap-4 list-none">
                <li className="link">Home</li>
              </ul>
            </section>
          </aside>
          <aside className="fixed left-[25%] top-5 bottom-5 w-[73%] aside2"></aside>
        </section>
      </section>
    </>
  );
};

export default Home;
