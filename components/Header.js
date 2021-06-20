import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const menus = [
  {
    name: "PROFILE",
  },
  {
    name: "JOBS",
  },
  {
    name: "PROFESSIONAL NETWORK",
  },
  {
    name: "LOUNGE",
  },
  {
    name: "SALARY",
  },
];

export function Header() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-start items-center px-4 py-6 sm:px-6 md:justify-start">
            <div className="mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <h2 className="text-base font-bold leading-7 text-blue-500 sm:text-lg sm:truncate">
                HEALTH EXPLORER
              </h2>
            </div>

            <nav className="hidden md:flex space-x-10">
              {menus.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="text-sm font-bold text-gray-900 hover:text-blue-500 focus:outline-none"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex justify-end md:flex-1 lg:w-0">
              <button
                type="button"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-bold text-blue-500 bg-white hover:border-blue-700 focus:outline-none"
              >
                CREATE JOB
              </button>
              <div></div>

              <button className="ml-4 relative flex items-center justify-center h-10 w-10 rounded-full text-base text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full border-4 border-white text-white bg-red-500 text-xs">
                  2
                </span>
                <span className="font-medium leading-none text-white">JO</span>
              </button>

              <button
                type="button"
                className="ml-4 whitespace-nowrap text-sm font-bold text-gray-900 hover:text-gray-500 focus:outline-none"
              >
                LOGOUT
              </button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold leading-7 text-blue-500 sm:text-xl sm:truncate">
                        HEALTH EXPLORER
                      </h2>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {menus.map((item, idx) => (
                        <button
                          key={idx}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md  shadow-sm text-base font-bold text-blue-500 bg-white hover:border-blue-700 focus:outline-none"
                    >
                      CREATE JOB
                    </button>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      <button
                        type="button"
                        className="font-bold text-grey-600 hover:text-grey-500 focus:outline-none"
                      >
                        LOGOUT
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
