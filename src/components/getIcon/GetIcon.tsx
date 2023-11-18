import {
  FaAddressCard,
  FaCode,
  FaFilm,
  FaFolder,
  FaFootballBall,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaKeyboard,
  FaMicrochip,
  FaMusic,
  FaNewspaper,
  FaPaintBrush,
  FaPlane,
  FaPlus,
  FaRobot,
  FaShareAlt,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

import { FaPencil } from "react-icons/fa6";

const GetIcon = ({ iconName, size }: { iconName: string; size: number }) => {
  switch (iconName) {
    case "FaAddressCard":
      return <FaAddressCard size={size} />;
    case "FaCode":
      return <FaCode size={size} />;
    case "FaFolder":
      return <FaFolder size={size} />;
    case "FaHome":
      return <FaHome size={size} />;
    case "FaKeyboard":
      return <FaKeyboard size={size} />;
    case "FaPaintBrush":
      return <FaPaintBrush size={size} />;
    case "FaPlus":
      return <FaPlus size={size} />;
    case "FaRobot":
      return <FaRobot size={size} />;
    case "FaShareAlt":
      return <FaShareAlt size={size} />;
    case "FaUser":
      return <FaUser size={size} />;
    case "FaPencil":
      return <FaPencil size={size} />;
    case "MdFavorite":
      return <MdFavorite size={size} />;
    case "FaShoppingCart":
      return <FaShoppingCart size={size} />;
    case "FaGraduationCap":
      return <FaGraduationCap size={size} />;
    case "FaNewspaper":
      return <FaNewspaper size={size} />;
    case "FaHeartbeat":
      return <FaHeartbeat size={size} />;
    case "FaFilm":
      return <FaFilm size={size} />;
    case "FaMicrochip":
      return <FaMicrochip size={size} />;
    case "FaPlane":
      return <FaPlane size={size} />;
    case "FaUtensils":
      return <FaUtensils size={size} />;
    case "FaFootballBall":
      return <FaFootballBall size={size} />;
    case "Music":
      return <FaMusic size={size} />;
    default:
      return <FaFolder size={size} />;
  }
};

export default GetIcon;
