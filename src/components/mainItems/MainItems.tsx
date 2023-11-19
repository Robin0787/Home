import { useLocation } from "react-router-dom";
import SingleItem from "../SingleItem";
import getWebsites from "./helper/getWebsites.js";

import { useEffect, useState } from "react";
import ItemsSkeleton from "../ItemsSkeleton/ItemsSkeleton.js";

const data = [
  {
    name: "Google",
    logo: "https://i.ibb.co/wd3VsLZ/google.png",
    url: "https://www.google.com",
    category: "home",
    ring: true,
  },
  {
    name: "Facebook",
    logo: "https://i.ibb.co/QjY2Yg4/fb.webp",
    url: "https://www.facebook.com",
    category: "social",
    ring: true,
  },
  {
    name: "GitHub",
    logo: "https://i.ibb.co/84h6b1B/github.png",
    url: "https://www.github.com",
    category: "development",
    ring: true,
  },
  {
    name: "Youtube",
    logo: "https://i.ibb.co/jHWHK1J/youtube.png",
    url: "https://www.youtube.com",
    category: "entertainment",
    ring: true,
  },
  {
    name: "Gmail",
    logo: "https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg",
    url: "https://mail.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Maps",
    logo: "https://lh3.googleusercontent.com/V0Lu6YzAVaCVcjSJ_4Qb0mR_idw-GApETGbkodvDKTH-rpDvHuD6J84jshR_FvXdl5mJxqbIHVdebYCCbQMJNxIxRaIHYFSq6z7laA",
    url: "https://maps.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Files",
    logo: "https://lh3.googleusercontent.com/Qq8jgBfsLRsv_51_7cAOKHpCG_6NnXqrmfCVF9DOlVtVDu7-0NoMZBHd_v173vq-LtLiexyEY6HB318oM-1owQCVClHKvrXyLHA8",
    url: "https://files.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Meet",
    logo: "https://lh3.googleusercontent.com/n3Eac1gPc5OTEh7Go1jemICnooceXtfs4VZW-4CPukCUi_doFsN9Q8njidksZ4KIFyPJVYtR7ZhLL16VoUJSPE1j74iTXT2xwCqq",
    url: "https://meet.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Drive",
    logo: "https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ",
    url: "https://drive.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Docs",
    logo: "https://lh3.googleusercontent.com/1DECuhPQ1y2ppuL6tdEqNSuObIm_PW64w0mNhm3KGafi40acOJkc4nvsZnThoDKTH8gWyxAnipJmvCiszX8R6UAUu1UyXPfF13d7",
    url: "https://docs.google.com",
    category: "personal",
    ring: false,
  },
  {
    name: "Google Forms",
    logo: "https://lh3.googleusercontent.com/qT-mnpsMIcop6f82s52RiUSQTfhP5TqbS9eNovaITMbjEIAlIxuW5m3lI2LxLkwox92YIl7rPIzsI0oxUzLPx89KyPabgiLAPeVcjg",
    url: "https://docs.google.com/forms",
    category: "personal",
    ring: false,
  },
];

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

  // Fetching the data
  useEffect(() => {
    setLoading(true);
    getWebsites()
      .then((data: unknown) => {
        // checking for the search query
        if (queryValue) {
          // finding the correct data
          const selectedData = data.find(
            (item) => item.category === queryValue
          );
          if (selectedData) {
            setWebsites(selectedData.items);
          } else {
            // if not matching with any category then show the default data
            const defaultData = data.find((item) => item.category === "home");
            setWebsites(defaultData.items);
          }
        } else {
          const defaultData = data.find((item) => item.category === "home");
          setWebsites(defaultData.items);
        }
        setLoading(false);
      })
      .catch((err: object) => {
        setLoading(false);
        console.log(err);
      });
  }, [queryValue]);

  return (
    <section id="scrollBar" className="h-full w-full p-5 overflow-y-auto">
      <section className="h-full">
        {loading ? (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
            <ItemsSkeleton />
            <ItemsSkeleton />
            <ItemsSkeleton />
            <ItemsSkeleton />
          </section>
        ) : (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
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
        )}
      </section>
    </section>
  );
};

export default MainItems;
