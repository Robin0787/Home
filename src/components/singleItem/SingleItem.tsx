import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { IoMdArrowRoundUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import ConfirmModal from "../confirmModal/ConfirmModal.tsx";
import deleteItem from "./helper/deleteItem";

type Item = {
  _id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  ring: boolean;
};

const SingleItem = ({ item }: { item: Item }) => {
  const { _id, logo, name, url, ring } = item;
  const [showEditBox, setShowEditBox] = useState<boolean>(false);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  function handleConfirmModal() {
    deleteItem(_id)
      .then((data) => {
        queryClient.invalidateQueries(["websites"]);
        setConfirmModal(false);
      })
      .catch((err) => {
        console.log(err);
        setConfirmModal(false);
      });
  }

  return (
    <div
      className="bg-white/10 rounded-[14px] relative group"
      onMouseLeave={() => {
        setShowEditBox(false);
      }}
    >
      <div className="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
        <div className="w-full h-full">
          {/* Logo Field */}
          <div className="w-full py-3">
            <img
              src={logo}
              alt="logo"
              className={`h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ${
                ring ? "ring-[14px] rounded-full" : "ring-[10px] rounded-[8px]"
              } ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300`}
              onClick={() => {
                window.open(url);
              }}
            />
          </div>
          {/* Name Field */}
          <div className="w-full mt-4">
            <div
              className="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden"
              onClick={() => {
                window.open(url);
              }}
            >
              <h3 className="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                {name}
              </h3>
            </div>
          </div>
          {/* Link Field */}
          <div className="mt-2 w-full flex justify-between items-center gap-1">
            <div className="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
              <h4 className="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                {url}
              </h4>
            </div>
            <div
              className="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer"
              onClick={() => {
                window.open(url);
              }}
            >
              <FiExternalLink size={16} />
            </div>
          </div>
          {/* Three dot or setting field */}
          <div
            className="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer"
            onClick={() => {
              setShowEditBox((prev) => !prev);
            }}
          >
            <BsThreeDotsVertical size={20} />
          </div>
          <div
            className={`absolute top-0 left-0 w-full ${
              showEditBox ? "h-full" : "h-0"
            }  home rounded-[12px] duration-500 overflow-hidden`}
          >
            <div className="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
              <div className="p-3">
                <div
                  className="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[8px] duration-300 cursor-pointer"
                  onClick={() => {
                    setConfirmModal(true);
                  }}
                >
                  <MdDelete size={20} /> Delete
                </div>
              </div>
              <div
                className="flex justify-start items-center cursor-pointer absolute bottom-2 left-1/2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300"
                onClick={() => {
                  setShowEditBox(false);
                }}
              >
                <IoMdArrowRoundUp size={20} />
              </div>
            </div>
          </div>
          <ConfirmModal
            openModal={confirmModal}
            setOpenModal={setConfirmModal}
            modalHandler={handleConfirmModal}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
