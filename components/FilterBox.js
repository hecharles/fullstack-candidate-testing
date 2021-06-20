import React, { useState } from "react";
import { FilterModal } from "./FilterModal";
import { useJobsStore } from "../stores";

export function FilterBox({ filterId, title, items }) {
  const [showMore] = useState(items.length > 10);
  const [showModal, setShowModal] = useState(false);

  const [state, actions] = useJobsStore();

  const list = items.length > 10 && showMore ? items.slice(0, 10) : [...items];

  const hideModal = function () {
    setShowModal(false);
  };

  let showMoreUi;
  let modalUi;

  if (items.length > 10) {
    if (showMore) {
      showMoreUi = (
        <li>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="text-sm text-blue-500 focus:outline-none"
          >
            Show more
          </button>
        </li>
      );
    }
    if (showModal) {
      modalUi = (
        <FilterModal
          filterId={filterId}
          title={title}
          data={items}
          hideModal={hideModal}
        />
      );
    }
  }
  return (
    <>
      {modalUi}
      <div className="mb-4 rounded-lg bg-white overflow-hidden shadow">
        <div className="p-4 pb-8">
          <div
            className={`text-sm font-bold ${
              state.filterBy === filterId ? "text-blue-500" : "text-gray-900"
            }`}
          >
            {title}
          </div>
          <div className="flow-root mt-6">
            <ul className="-my-5">
              {list.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      actions.setFilter({
                        filterBy: filterId,
                        filterByValue: item.key,
                      });
                      actions.callJobsApi();
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
                </li>
              ))}
              {showMoreUi}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
