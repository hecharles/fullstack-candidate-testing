import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useJobsStore } from "../stores";

export function SearchBox() {
  const [state, actions] = useJobsStore();

  const searchOnSubmit = async function (event) {
    event.preventDefault();
    await actions.callJobsApi();
    actions.setSort();
  };
  return (
    <div className="bg-white shadow p-4 m-4">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <form onSubmit={searchOnSubmit} className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            value={state.search}
            onChange={(event) => actions.setSearch(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                searchOnSubmit(event);
              }
            }}
            className="block w-full pl-10 pr-3 py-2  rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
            placeholder="Search for any job, title, keywords or company"
            type="search"
          />
        </form>
      </div>
    </div>
  );
}
