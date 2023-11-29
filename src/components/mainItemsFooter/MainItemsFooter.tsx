import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { useLocation, useSearchParams } from "react-router-dom";
import AddItemModal from "../addItemModal/AddItemModal";
import ConfirmModal from "../confirmModal/ConfirmModal";
import deleteCategory from "./helper/deleteCategory";

const MainItemsFooter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [modal, setModal] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [, setSearchParams] = useSearchParams();

  const showDeleteIcon =
    queryValue === "home" || queryValue === null ? false : true;

  function deleteModalHandler() {
    deleteCategory(queryValue as string)
      .then(() => {
        setConfirmModal(false);
        setSearchParams("");
        queryClient.invalidateQueries([
          "categories",
          "websites",
          "category-list",
        ]);
      })
      .catch((err) => {
        setConfirmModal(false);
        console.log(err);
      });
  }

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">
        <h1 className="uppercase text-white font-semibold 2xl:text-lg">
          {queryValue || "Home"}
        </h1>
        {showDeleteIcon && (
          <button
            className="p-[6px] rounded-full text-white bg-[#ffffff15] hover:bg-[#ffffff25] duration-300"
            onClick={() => {
              setConfirmModal(true);
            }}
          >
            <FaTrashAlt size={15} />
          </button>
        )}
      </div>
      <button
        className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 2xl:py-2 2xl:px-5 bg-[#ffffff08] hover:bg-[#ffffff20] rounded-[14px] duration-300"
        onClick={() => {
          setModal(true);
        }}
      >
        <IoAddCircle size={20} />
        <span>Add</span>
      </button>
      <AddItemModal openModal={modal} setModal={setModal} />
      <ConfirmModal
        openModal={confirmModal}
        setOpenModal={setConfirmModal}
        modalHandler={deleteModalHandler}
      />
    </div>
  );
};

export default MainItemsFooter;
