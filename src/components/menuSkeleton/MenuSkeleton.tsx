import CircleLoader from "../loaders/circleLoader/CircleLoader";

const MenuSkeleton = ({ loader }: { loader: boolean }) => {
  return (
    <div className="bg-[#ffffff15] rounded-[14px] h-[44px] w-full flex justify-center items-center">
      <CircleLoader loader={loader} height="30px" width="30px" />
    </div>
  );
};

export default MenuSkeleton;
