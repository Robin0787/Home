import { Dialog, Transition } from "@headlessui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useState } from "react";
import { FaLock } from "react-icons/fa";
import ListDropdown from "../listDropdown/ListDropdown";
import CircleLoader from "../loaders/circleLoader/CircleLoader";
import UploadImage from "../uploadImage/UploadImage";
import styles from "./AddItemModal.module.css";
import postWebsiteToDB from "./helper/postWebsiteToDB";
import uploadImage from "./helper/uploadImage";

type Props = {
  openModal: boolean;
  setModal: unknown;
};

const AddItemModal = ({ openModal, setModal }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBgType, setSelectedBgType] = useState<
    "Circle" | "Square" | ""
  >("Circle");
  const [websiteName, setWebsiteName] = useState<string>("");
  const [websiteURL, setWebsiteURL] = useState<string>("");
  const [logoURL, setLogoURL] = useState<string>("");
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [lockUploadLogo, setLockUploadLogo] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [itemAddLoading, setItemAddLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  function handleImageChange(img: FormData) {
    setImageLoading(true);
    uploadImage(img)
      .then((data) => {
        setLogoURL(data.display_url);
        setImageLoading(false);
      })
      .catch((err) => {
        setImageLoading(false);
        console.log(err);
      });
  }

  function handleCategory(selectedItem: string) {
    setSelectedCategory(selectedItem);
  }

  function handleSelectBgType(selectedItem: "Circle" | "Square") {
    setSelectedBgType(selectedItem);
  }

  function clearValues() {
    setError("");
    setLogoURL("");
    setWebsiteName("");
    setWebsiteURL("");
    setSelectedBgType("");
    setSelectedCategory("");
  }

  function handleAddItem() {
    if (!logoURL) {
      setError("Logo URL is required");
      return;
    } else if (!websiteName) {
      setError("Website name is required");
      return;
    } else if (!websiteURL) {
      setError("Website URL is required");
      return;
    } else if (!selectedCategory) {
      setError("Category is required");
      return;
    } else if (!selectedBgType) {
      setError("BG Style is required");
      return;
    } else {
      setError("");
      setItemAddLoading(true);
      const itemDetails = {
        name: websiteName,
        logo: logoURL,
        url: websiteURL,
        category: [selectedCategory?.toLowerCase()],
        ring: selectedBgType === "Circle",
      };
      postWebsiteToDB(itemDetails)
        .then((data) => {
          if (data.insertedId) {
            setItemAddLoading(false);
            setModal(false);
            // this is for re fetching websites in the main items section.
            queryClient.invalidateQueries(["websites"]);
            clearValues();
          } else {
            console.log(data);
            setError("Something went wrong!");
          }
        })
        .catch((err) => {
          setItemAddLoading(false);
          console.log(err);
        });
    }
  }

  const { data: categoriesList = [], isLoading: listLoading = false } =
    useQuery({
      queryKey: ["category-list"],
      queryFn: async () => {
        try {
          const url: string =
            import.meta.env.VITE_BASE_SERVER_URL + `/api/v1/categories-list`;
          const res = await axios.get(url);
          return res.data;
        } catch (error) {
          return [];
        }
      },
    });

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
                className="transform h-full w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] rounded-[14px] shadow-xl py-5 md:py-10"
              >
                <div className="h-full text-center space-y-0">
                  <div className="w-[90%] md:w-[80%] mx-auto">
                    <div className="relative w-full">
                      <UploadImage
                        handleImageChange={handleImageChange}
                        loading={imageLoading}
                        image={lockUploadLogo ? "" : logoURL}
                      />
                      {lockUploadLogo && (
                        <div
                          className={`absolute top-0 h-full w-full bg-[#00000060] rounded-[8px] duration-300`}
                        >
                          <div className="h-full w-full bg-[#ffffff60] rounded-[8px] text-white flex justify-center items-center duration-300">
                            <FaLock
                              size={40}
                              className="cursor-pointer"
                              onClick={() => {
                                // setLogoURL("");
                                setLockUploadLogo((prev) => !prev);
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative w-full">
                      <div
                        className={`mt-4 w-full relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          onChange={(e) => setLogoURL(e.target.value)}
                          value={logoURL}
                          disabled={!lockUploadLogo}
                          required
                        />
                        <span className={styles.inputTitle}>Logo URL</span>
                      </div>
                      {lockUploadLogo || (
                        <div className="absolute top-0 h-full w-full bg-[#00000060] rounded-[8px] duration-300">
                          <div className="h-full w-full bg-[#ffffff60] rounded-[8px] text-white flex justify-center items-center duration-300">
                            <FaLock
                              size={25}
                              className="cursor-pointer"
                              onClick={() => {
                                setLockUploadLogo((prev) => !prev);
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 2xl:gap-5">
                      <div
                        className={`w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          onChange={(e) => setWebsiteName(e.target.value)}
                          value={websiteName}
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
                          loading={listLoading}
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 2xl:gap-5">
                      <div
                        className={`w-full md:w-[60%] relative bg-[#ffffff20] text-primary rounded-[8px]`}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          className={styles.inputField}
                          onChange={(e) => {
                            setWebsiteURL(e.target.value);
                          }}
                          value={websiteURL}
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
                    <div className="pt-6 mt-2 flex flex-col items-center gap-3 2xl:gap-5 relative ">
                      {error && (
                        <div className="text-xs tracking-wide text-left text-white absolute top-0 left-0">
                          {error}
                        </div>
                      )}
                      <button
                        onClick={handleAddItem}
                        className="w-full py-2 2xl:py-3 rounded-md text-sm sm:text-base text-primary bg-[#ffffff20] border border-[#ffffff20] hover:bg-[#ffffff40] duration-300 cursor-pointer flex justify-center items-center"
                      >
                        {itemAddLoading ? (
                          <CircleLoader
                            loader={true}
                            height={"24px"}
                            width={"24px"}
                          />
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setModal(false);
                          clearValues();
                        }}
                        className="w-full  py-2 2xl:py-3 rounded-md text-sm sm:text-base text-primary bg-transparent border border-[#ffffff20] hover:bg-[#ffffff20] duration-300 cursor-pointer"
                      >
                        Cancel
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
