import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListDropdown from "../listDropdown/ListDropdown";
import UploadImage from "../uploadImage/UploadImage";
import styles from "./AddItemModal.module.css";
import getCategoriesList from "./helper/getCategoriesList";

type Props = {
  openModal: boolean;
  setModal: unknown;
};

// const categories = [
//   "Home",
//   "Personal",
//   "Education",
//   "Sports",
//   "Health",
//   "Social",
//   "News",
//   "Design",
// ];

const AddItemModal = ({ openModal, setModal }: Props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [image, setImage] = useState<FormData>();
  const [selectedCategory, setSelectedCategory] = useState(queryValue);
  const [listLoading, setListLoading] = useState<boolean>(false);
  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [selectedBgType, setSelectedBgType] = useState<"Circle" | "Square">(
    "Circle"
  );

  function handleImageChange(img: FormData) {
    setImage(img);
  }

  function handleCategory(selectedItem: string) {
    setSelectedCategory(selectedItem);
  }

  function handleSelectBgType(selectedItem: string) {
    setSelectedBgType(selectedItem);
  }

  useEffect(() => {
    setListLoading(true);
    getCategoriesList()
      .then((data: string[]) => {
        setCategoriesList(data);
        setListLoading(false);
      })
      .catch((err: unknown) => {
        console.log(err);
        setListLoading(false);
      });
  }, []);

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
                className="transform h-full w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] rounded-[14px] shadow-xl py-10"
              >
                <div className="h-full text-center space-y-0">
                  <div className="w-[80%] mx-auto">
                    <UploadImage
                      handleImageChange={handleImageChange}
                      image={image}
                    />
                    <div className="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                      <div
                        className={`w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          required
                        />
                        <span className={styles.inputTitle}>Website Name</span>
                      </div>
                      <div className="w-full md:w-[40%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                        <ListDropdown
                          selected={selectedCategory}
                          items={categoriesList}
                          handleList={handleCategory}
                          title={"Category"}
                          zIndex={11}
                          loading={false}
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center gap-3 2xl:gap-5">
                      <div
                        className={`w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          required
                        />
                        <span className={styles.inputTitle}>Website URL</span>
                      </div>
                      <div className="w-full md:w-[40%] relative bg-[#ffffff20] text-primary rounded-[8px]">
                        <ListDropdown
                          selected={selectedBgType}
                          items={["Circle", "Square"]}
                          handleList={handleSelectBgType}
                          title={"BG Style"}
                          bottom="-bottom-5"
                          zIndex={10}
                          loading={false}
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-3 2xl:gap-5">
                      <button
                        onClick={() => {
                          setModal(false);
                        }}
                        className="w-full  py-2 2xl:py-3 rounded-md text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button className="w-full py-2 2xl:py-3 rounded-md text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer">
                        Add
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

export default AddItemModal;
