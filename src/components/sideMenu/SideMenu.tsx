import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import logo from "../../assets/logo.png";
import AddCategoryModal from "../addCategoryModal/AddCategoryModal.tsx";
import GetIcon from "../getIcon/GetIcon.js";
import MenuSkeleton from "../menuSkeleton/MenuSkeleton.tsx";
import MenuItem from "./MenuItem";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  const [addCategoryModal, setAddCategoryModal] = useState<boolean>(false);

  const { data: categories = [], isLoading: loading = false } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const url: string =
          import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/categories`;
        const res = await axios.get(url);
        return res.data;
      } catch (error) {
        return [];
      }
    },
  });

  return (
    <section className="h-full w-full relative">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-start items-center text-white">
          <div className="flex justify-start items-center gap-3">
            <img src={logo} alt="logo" className="h-10 w-14" />
            <h1 className="text-2xl font-bold">Site Saver</h1>
          </div>
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
              <li
                className={styles.menu}
                onClick={() => setAddCategoryModal(true)}
              >
                <GetIcon iconName="FaPlus" size={20} />
                <span>Add New</span>
              </li>
            </>
          )}
        </ul>
        <AddCategoryModal
          openModal={addCategoryModal}
          setModal={setAddCategoryModal}
        />
      </article>
      {/* Footer Section */}
      <div className="h-[10%] w-full bg-[#00000010] rounded-b-[20px]">
        <div className="flex justify-center items-center h-full">
          <p className="text-sm 2xl:text-base text-primary">
            All rights reserved by{" "}
            <span className="text-white font-semibold">Robin</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
