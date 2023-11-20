import { useLocation } from "react-router-dom";
import SingleItem from "../singleItem/SingleItem.tsx";
import getWebsites from "./helper/getWebsites.js";

import { useEffect, useState } from "react";
import ItemsSkeleton from "../ItemsSkeleton/ItemsSkeleton.tsx";
import MainItemsFooter from "../mainItemsFooter/MainItemsFooter.tsx";

type Websites = [
  {
    name: string;
    logo: string;
    url: string;
    category: string;
    ring: boolean;
  }
];

const MainItems = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [websites, setWebsites] = useState<Websites>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getWebsites(queryValue)
      .then((data: Websites) => {
        setWebsites(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setLoading(false);
        console.log(err);
      });
  }, [queryValue]);

  return (
    <section className="h-full w-full rounded-[24px]">
      <section id="scrollBar" className="h-[90%] w-full p-5 overflow-y-auto">
        <section className="h-full">
          {loading ? (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
              <ItemsSkeleton loader={true} />
              <ItemsSkeleton loader={true} />
              <ItemsSkeleton loader={true} />
              <ItemsSkeleton loader={true} />
            </section>
          ) : websites?.length > 0 ? (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
              {websites?.map((item, index) => (
                <SingleItem
                  key={index}
                  name={item.name}
                  logo={item.logo}
                  url={item.url}
                  category={item.category}
                  ring={item.ring}
                />
              ))}
            </section>
          ) : (
            <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
              <h1>No websites found!</h1>
            </section>
          )}
        </section>
      </section>
      <section className="h-[10%] w-full bg-[#00000035] rounded-b-[20px] px-5 flex justify-center items-center overflow-hidden">
        <MainItemsFooter />
      </section>
    </section>
  );
};

export default MainItems;
