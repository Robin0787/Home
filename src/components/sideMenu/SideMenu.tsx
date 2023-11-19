import { useEffect, useState } from "react";
import GetIcon from "../getIcon/GetIcon.js";
import MenuSkeleton from "../menuSkeleton/MenuSkeleton.tsx";
import MenuItem from "./MenuItem";
import styles from "./SideMenu.module.css";
import getCategories from "./helper/getCategories.js";

type Categories = [
  {
    _id: string;
    name: string;
    query: string;
    icon: string;
    iconSize: number;
  }
];

const SideMenu = () => {
  const [categories, setCategories] = useState<Categories>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data: Categories) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="h-full w-full relative">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-start items-center text-white">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
      </div>
      <article id="menuScrollBar" className="h-[80%] overflow-y-scroll">
        <ul className="flex flex-col justify-start items-start gap-3 list-none px-5 py-4">
          {loading ? (
            <>
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
              <MenuSkeleton loader={true} />
            </>
          ) : (
            <>
              {categories?.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  iconSize={item.iconSize}
                  query={item.query}
                />
              ))}
              <li className={styles.menu}>
                <GetIcon iconName="FaPlus" size={20} />
                <span>Add New</span>
              </li>
            </>
          )}
        </ul>
      </article>
      {/* Footer Section */}
      <div className="h-[10%] w-full bg-[#00000010] rounded-b-[20px]">
        <div className="flex justify-center items-center p-5">
          <p className="text-sm text-primary">
            All rights reserved by <span className="text-white">Robin</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
