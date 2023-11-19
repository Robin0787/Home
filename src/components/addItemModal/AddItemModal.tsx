import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import ListDropdown from "../listDropdown/ListDropdown";
import UploadImage from "../uploadImage/UploadImage";
import styles from "./AddItemModal.module.css";

type Props = {
  openModal: boolean;
  setModal: unknown;
};

const categories = [
  "Home",
  "Personal",
  "Education",
  "Sports",
  "Health",
  "Social",
  "News",
  "Design",
];

const AddItemModal = ({ openModal, setModal }: Props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [image, setImage] = useState<FormData>();
  const [selectedCategory, setSelectedCategory] = useState(queryValue);

  function handleImageChange(img: FormData) {
    setImage(img);
  }

  function handleCategory(selectedItem: string) {
    setSelectedCategory(selectedItem);
  }

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setModal(false);
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
                className="transform h-full w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] rounded-[14px] shadow-xl py-10"
              >
                <div className="h-full text-center space-y-5">
                  <div className="w-[80%] mx-auto">
                    <UploadImage
                      handleImageChange={handleImageChange}
                      image={image}
                    />
                    <div className="py-5 flex justify-between items-center gap-3 2xl:gap-5">
                      <div
                        className={`w-full md:w-1/2 relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          required
                        />
                        <span className={styles.inputTitle}>Name</span>
                      </div>
                      <div className="w-full md:w-1/2 relative bg-[#ffffff20] text-primary rounded-[8px]">
                        <ListDropdown
                          selected={selectedCategory}
                          items={categories}
                          handleList={handleCategory}
                          title={"Category"}
                          zIndex={11}
                        />
                      </div>
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

export default AddItemModal;
