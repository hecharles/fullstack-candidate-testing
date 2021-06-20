import { XIcon } from "@heroicons/react/outline";
import { useJobsStore } from "../stores";

export function FilterModal({ filterId, title, data, hideModal }) {
  const [state, actions] = useJobsStore();

  return (
    <div
      className="fixed z-20 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-4xl sm:p-6">
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => {
                hideModal();
              }}
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
              <h3
                className={`text-lg leading-6 font-medium ${
                  state.filterBy === filterId
                    ? "text-blue-500"
                    : "text-gray-900"
                }`}
              >
                {title}
              </h3>
              <div className="mt-3 pt-4 border-t-2">
                <div className="grid grid-cols-4 gap-4">
                  {data.map((item, idx) => (
                    <div key={idx}>
                      <button
                        onClick={async () => {
                          actions.setFilter({
                            filterBy: filterId,
                            filterByValue: item.key,
                          });

                          await actions.callJobsApi();
                          actions.setSort();
                          hideModal();
                        }}
                        type="button"
                        className="text-left focus:outline-none"
                      >
                        <span
                          className={`text-sm ${
                            state.filterByValue === item.key
                              ? "hover:text-gray-800 text-blue-500"
                              : "text-gray-800 hover:text-blue-500"
                          }`}
                        >
                          {item.key}
                        </span>
                        <span className="pl-1 text-xs text-gray-400">
                          {item.doc_count}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
