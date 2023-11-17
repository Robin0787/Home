import { FaHome, FaPlus, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <section className="h-full w-full relative">
      <ul className="mt-5 flex flex-col justify-start items-start gap-4 list-none p-5">
        <li className={styles.menu}>
          <FaHome size={20} />
          <span>Home</span>
        </li>
        <li className={styles.menu}>
          <FaUser size={20} />
          <span>Personal</span>
        </li>
        <li className={styles.menu}>
          <FaHome size={20} />
          <span>Work</span>
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
      <div className="h-[10%] w-full mt-5 bg-[#ffffff10] absolute bottom-5 rounded-b-[20px]"></div>
    </section>
  );
};

export default SideMenu;
