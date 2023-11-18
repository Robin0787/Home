import MenuItem from "./MenuItem";

const menus = [
  {
    name: "Home",
    query: "home",
    icon: "FaHome",
    iconSize: 20,
  },
  {
    name: "Personal",
    query: "personal",
    icon: "FaUser",
    iconSize: 20,
  },
  {
    name: "Social",
    query: "social",
    icon: "FaShareAlt",
    iconSize: 20,
  },
  {
    name: "News",
    query: "news",
    icon: "FaNewspaper",
    iconSize: 20,
  },
  {
    name: "Health",
    query: "health",
    icon: "FaHeartbeat",
    iconSize: 20,
  },
  {
    name: "E-Commerce",
    query: "eCommerce",
    icon: "FaShoppingCart",
    iconSize: 20,
  },
  {
    name: "Education",
    query: "education",
    icon: "FaGraduationCap",
    iconSize: 20,
  },
  {
    name: "Food & Drinks",
    query: "foodDrinks",
    icon: "FaUtensils",
    iconSize: 20,
  },
  {
    name: "Entertainment",
    query: "entertainment",
    icon: "FaFilm",
    iconSize: 20,
  },
  {
    name: "Travel",
    query: "travel",
    icon: "FaPlane",
    iconSize: 20,
  },
  {
    name: "Sports",
    query: "sports",
    icon: "FaFootballBall",
    iconSize: 20,
  },
  {
    name: "Music",
    query: "music",
    icon: "FaMusic",
    iconSize: 20,
  },
  {
    name: "Designing",
    query: "designing",
    icon: "FaPaintBrush",
    iconSize: 20,
  },
  {
    name: "Development",
    query: "development",
    icon: "FaCode",
    iconSize: 20,
  },
  {
    name: "Programming",
    query: "programming",
    icon: "FaKeyboard",
    iconSize: 20,
  },
  {
    name: "Drawing",
    query: "drawing",
    icon: "FaPencil",
    iconSize: 20,
  },
  {
    name: "Favorite",
    query: "favorite",
    icon: "MdFavorite",
    iconSize: 20,
  },
  {
    name: "My Folder",
    query: "myFolder",
    icon: "FaFolder",
    iconSize: 20,
  },
  {
    name: "Add New",
    query: "addNew",
    icon: "FaPlus",
    iconSize: 18,
  },
];

const SideMenu = () => {
  return (
    <section className="h-full w-full relative">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-start items-center text-white">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
      </div>
      <article id="menuScrollBar" className="h-[80%] overflow-y-scroll">
        <ul className="flex flex-col justify-start items-start gap-3 list-none px-5 py-4">
          {menus.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              icon={item.icon}
              iconSize={item.iconSize}
              query={item.query}
            />
          ))}
        </ul>
      </article>
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
