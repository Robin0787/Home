import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import AddItemModal from "../customModal/AddItemModal";

const MainItemsFooter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="uppercase text-primary">{queryValue || "Home"}</h1>
      <button
        className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 bg-[#ffffff08] hover:bg-[#ffffff20] rounded-[14px] duration-300"
        onClick={() => {
          setModal(true);
        }}
      >
        <IoAddCircle size={20} />
        <span>Add</span>
      </button>
      <AddItemModal openModal={modal} setModal={setModal}>
        <div className="h-full text-center space-y-5">
          <h1 className="text-3xl text-primary uppercase">
            {queryValue || "Home"}
          </h1>
        </div>
      </AddItemModal>
    </div>
  );
};

export default MainItemsFooter;
