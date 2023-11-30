import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { BsCheck2 } from "react-icons/bs";
import { PiCaretUpDownLight } from "react-icons/pi";
import GetIcon from "../getIcon/GetIcon";

type Props = {
  items: string[] | undefined;
  handleList: unknown;
  selected: string | null;
  title: string;
};

const IconList = ({ items, handleList, selected, title }: Props) => {
  return (
    <div
      className={`rounded-[8px] py-1 cursor-pointer border border-[#ffffff10] z-40`}
    >
      <Listbox value={selected} onChange={handleList}>
        <div className="relative h-full z-40">
          <Listbox.Button
            className={`relative w-full text-center py-2 pl-3 pr-10 sm:text-sm`}
          >
            <span className="truncate text-primary capitalize flex justify-center items-center">
              {selected ? (
                <GetIcon iconName={selected} size={20} />
              ) : (
                `Select ${title}`
              )}
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
              className={`absolute left-0 -bottom-8 max-h-32 w-full overflow-y-auto overflow-x-hidden rounded-md bg-black/60 border border-[#ffffff50] text-base shadow-lg sm:text-sm grid grid-cols-3 gap-2 p-3`}
            >
              {items?.map((item, itemIndex) => (
                <Listbox.Option
                  key={itemIndex}
                  className={({ active }) =>
                    `relative cursor-pointer duration-200 select-none  capitalize rounded-lg ${
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
                        className={`block truncate p-2 rounded-lg  ${
                          selected ? "bg-white/40" : ""
                        }`}
                      >
                        <GetIcon iconName={item} size={20} />
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default IconList;
