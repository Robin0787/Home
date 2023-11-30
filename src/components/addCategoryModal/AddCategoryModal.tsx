import { Dialog, Transition } from "@headlessui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { MdCancel } from "react-icons/md";
import IconList from "../iconList/iconList";
import CircleLoader from "../loaders/circleLoader/CircleLoader";
import styles from "./AddCategoryModal.module.css";
import addCategory from "./helper/addCategory";
import iconNames from "./helper/iconNames";

type Props = {
  openModal: boolean;
  setModal: unknown;
};

const AddCategoryModal = ({ openModal, setModal }: Props) => {
  const [error, setError] = useState<string>("");
  const [categoryAddLoading, setCategoryAddLoading] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const queryClient = useQueryClient();

  function handleAddCategory() {
    if (!selectedIcon) {
      setError("Please select icon..!");
      return;
    } else if (!categoryName) {
      setError("Category name is required.");
      return;
    } else {
      setError("");
      const categoryItem = {
        name: categoryName,
        query: categoryName.split(" ").join("").toLowerCase(),
        icon: selectedIcon,
        iconSize: 20,
        isDeleted: false,
      };
      setCategoryAddLoading(true);
      addCategory(categoryItem)
        .then(() => {
          queryClient.invalidateQueries([
            "categories",
            "websites",
            "category-list",
          ]);
          setCategoryAddLoading(false);
          setModal(false);
          clearValues();
        })
        .catch((err) => {
          setCategoryAddLoading(false);
          setModal(false);
          console.log(err);
        });
    }
  }

  function handleIconSelect(value: string) {
    setSelectedIcon(value);
  }

  function clearValues() {
    setError("");
    setCategoryName("");
    setSelectedIcon("");
  }

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setModal(false);
          clearValues();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                id="addItemModal"
                className="transform h-full w-[80%] sm:w-[70%] md:w-[50%] lg:w-[35%] rounded-[14px] shadow-xl py-10"
              >
                <div className="h-full text-center">
                  <div className="w-[80%] mx-auto">
                    <div className="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                      <div className="w-full md:w-[40%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                        <IconList
                          selected={selectedIcon}
                          items={iconNames}
                          handleList={handleIconSelect}
                          title={"Icon"}
                        />
                      </div>
                      <div
                        className={`w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          onChange={(e) => setCategoryName(e.target.value)}
                          value={categoryName}
                          required
                        />
                        <span className={styles.inputTitle}>Category Name</span>
                      </div>
                    </div>
                    <div className="pt-6 mt-2 flex flex-col items-center gap-3 2xl:gap-5 relative ">
                      {error && (
                        <div className="text-xs tracking-wide text-left text-white absolute top-0 left-0">
                          {error}
                        </div>
                      )}
                      <button
                        onClick={handleAddCategory}
                        className="w-full py-2 2xl:py-3 rounded-md text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer flex justify-center items-center"
                      >
                        {categoryAddLoading ? (
                          <CircleLoader
                            loader={true}
                            height={"24px"}
                            width={"24px"}
                          />
                        ) : (
                          "Add"
                        )}
                      </button>
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <button
                        onClick={() => {
                          setModal(false);
                          clearValues();
                        }}
                        className="w-full text-primary cursor-pointer p-1 rounded-full bg-white/10 hover:bg-white/30 duration-300"
                      >
                        <MdCancel size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddCategoryModal;
