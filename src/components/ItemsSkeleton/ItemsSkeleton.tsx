"use client";
import { Skeleton } from "keep-react";

const ItemsSkeleton = () => {
  return (
    <div className="py-5 bg-white/10 rounded-[14px] h-[160px] lg:h-[192px]">
      <Skeleton animation={false}>
        <div className="w-8/12">
          <Skeleton.Line />
        </div>
      </Skeleton>
    </div>
  );
};

export default ItemsSkeleton;
