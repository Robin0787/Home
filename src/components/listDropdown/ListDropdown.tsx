import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsCheck2 } from "react-icons/bs";
import { PiCaretUpDownLight } from "react-icons/pi";
import CircleLoader from "../loaders/circleLoader/CircleLoader";

type Props = {
  items: string[] | undefined;
  handleList: unknown;
  selected: string | null;
  title: string;
  zIndex?: number;
  border?: string;
  bottom?: string;
  align?: string;
  loading: boolean;
};

const ListDropdown = ({
  items,
  handleList,
  selected,
  title,
  bottom = "-bottom-16 2xl:-bottom-28",
  zIndex = 1,
  loading,
}: Props) => {
  return (
    <div
      className={`rounded-[8px] py-1 cursor-pointer border border-[#ffffff10]`}
      style={{ zIndex }}
    >
      <Listbox value={selected} onChange={handleList}>
        <div className="relative h-full z-40" style={{ zIndex: zIndex }}>
          <Listbox.Button
            className={`relative w-full text-left py-2 pl-3 pr-10 sm:text-sm`}
          >
            <span className="block truncate text-primary">
              {selected ? selected : `Select ${title}`}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <PiCaretUpDownLight
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              id="listScrollBar"
              className={`absolute left-full ${
                loading ? "-bottom-2" : `${bottom} max-h-44 2xl:max-h-64`
              }  w-52 overflow-auto rounded-md bg-[#00000080] border border-[#ffffff50] text-base shadow-lg sm:text-sm`}
            >
              {loading ? (
                <CircleLoader loader={true} />
              ) : (
                items?.map((item, itemIndex) => (
                  <Listbox.Option
                    key={itemIndex}
                    className={({ active }) =>
                      `relative cursor-pointer duration-200 select-none py-2 ${
                        active
                          ? "bg-[#ffffff10] bg-opacity-20 text-white"
                          : "text-primary"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-8 text-[#ffffff]">
                            <BsCheck2 className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListDropdown;
