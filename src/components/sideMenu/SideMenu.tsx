import {
  FaAddressCard,
  FaCode,
  FaHome,
  FaKeyboard,
  FaPaintBrush,
  FaPlus,
  FaRobot,
  FaShareAlt,
  FaUser,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import { MdFavorite } from "react-icons/md";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <section className="h-full w-full relative">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-start items-center text-white">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
      </div>
      <article id="menuScrollBar" className="h-[80%] overflow-y-scroll">
        <ul className="flex flex-col justify-start items-start gap-4 list-none p-5">
          <li className={styles.menu}>
            <FaHome size={20} />
            <span>Home</span>
          </li>
          <li className={styles.menu}>
            <FaUser size={20} />
            <span>Personal</span>
          </li>
          <li className={styles.menu}>
            <FaShareAlt size={20} />
            <span>Social</span>
          </li>
          <li className={styles.menu}>
            <FaAddressCard size={20} />
            <span>Profession</span>
          </li>
          <li className={styles.menu}>
            <FaRobot size={20} />
            <span>AI</span>
          </li>
          <li className={styles.menu}>
            <FaPaintBrush size={20} />
            <span>Design</span>
          </li>
          <li className={styles.menu}>
            <FaCode size={20} />
            <span>Development</span>
          </li>
          <li className={styles.menu}>
            <FaKeyboard size={20} />
            <span>Programming</span>
          </li>
          <li className={styles.menu}>
            <FaPencil size={20} />
            <span>Drawing</span>
          </li>
          <li className={styles.menu}>
            <MdFavorite size={20} />
            <span>Favorite</span>
          </li>
          <li className={styles.addMenu}>
            <FaPlus size={18} />
            <span>Add New</span>
          </li>
        </ul>
      </article>
      <div className="h-[10%] w-full bg-[#00000010] rounded-b-[20px]"></div>
    </section>
  );
};

export default SideMenu;
