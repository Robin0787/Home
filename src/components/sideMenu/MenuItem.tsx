import { useLocation, useSearchParams } from "react-router-dom";
import GetIcon from "../getIcon/GetIcon";
import styles from "./SideMenu.module.css";

type Item = {
  name: string;
  query: string;
  icon: string;
  iconSize: number;
};

const MenuItem = (item: Item) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams({ q: item.query });
  }

  return (
    <li
      className={`${styles.menu} ${
        queryValue === item.query ? "bg-[#ffffff30] hover:bg-[#ffffff50]" : ""
      }`}
      onClick={handleClick}
    >
      <GetIcon iconName={item.icon} size={item.iconSize} />
      <span>{item.name}</span>
    </li>
  );
};

export default MenuItem;
