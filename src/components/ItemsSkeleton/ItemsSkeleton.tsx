import CircleLoader from "../loaders/circleLoader/CircleLoader";

const ItemsSkeleton = ({ loader }) => {
  return (
    <div className="py-5 bg-white/10 rounded-[14px] h-[160px] lg:h-[192px]">
      <div className="w-full h-full flex justify-center items-center">
        <CircleLoader loader={loader} />
      </div>
    </div>
  );
};

export default ItemsSkeleton;
