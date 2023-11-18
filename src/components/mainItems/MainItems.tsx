import { useLocation } from "react-router-dom";
import fb from "../../assets/logo/fb.webp";
import github from "../../assets/logo/github.png";
import google from "../../assets/logo/google.png";
import youtube from "../../assets/logo/youtube.png";
import SingleItem from "../SingleItem";

const MainItems = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");

  console.log(queryValue);

  return (
    <section id="scrollBar" className="h-full w-full p-5 overflow-y-auto">
      <section className="mt-5">
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
          <SingleItem
            logo={google}
            name={"Google"}
            url={"https://www.google.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={github}
            name={"GitHub"}
            url={"https://www.github.com"}
          />
          <SingleItem
            logo={google}
            name={"Google"}
            url={"https://www.google.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={youtube}
            name={"Youtube"}
            url={"https://www.youtube.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={github}
            name={"GitHub"}
            url={"https://www.github.com"}
          />
          <SingleItem
            logo={google}
            name={"Google"}
            url={"https://www.google.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={youtube}
            name={"Youtube"}
            url={"https://www.youtube.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={github}
            name={"GitHub"}
            url={"https://www.github.com"}
          />
          <SingleItem
            logo={google}
            name={"Google"}
            url={"https://www.google.com"}
          />
          <SingleItem
            logo={fb}
            name={"Facebook"}
            url={"https://www.facebook.com"}
          />
          <SingleItem
            logo={youtube}
            name={"Youtube"}
            url={"https://www.youtube.com"}
          />
        </section>
      </section>
    </section>
  );
};

export default MainItems;
