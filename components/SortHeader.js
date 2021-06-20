import { useJobsStore } from "../stores";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/outline";

export function SortHeader() {
  const [state, actions] = useJobsStore();

  return (
    <div className="md:flex justify-between">
      <div>
        <span className="text-xs font-bold text-gray-900 ">
          {state.resultData.length}
        </span>
        <span className="ml-2 text-xs">job postings</span>
      </div>

      <div className="hidden md:block md:flex">
        <span className="text-sm">Sort by</span>
        <button
          onClick={() => {
            actions.setSort("sortByLocation");
          }}
          className="inline-flex items-center hover:text-blue-500 focus:outline-none ml-2 text-xs font-bold text-gray-900"
        >
          <span className="mr-1">Location</span>
          {state.sortByLocation === "asc" ? (
            <ArrowDownIcon className="h-2 w-2" aria-hidden="true" />
          ) : state.sortByLocation === "desc" ? (
            <ArrowUpIcon className="h-2 w-2" aria-hidden="true" />
          ) : (
            <div />
          )}
        </button>
        <button
          onClick={() => {
            actions.setSort("sortByRole");
          }}
          className="inline-flex items-center hover:text-blue-500 focus:outline-none ml-2 text-xs font-bold text-gray-900"
        >
          <span className="mr-1">Role</span>
          {state.sortByRole === "asc" ? (
            <ArrowDownIcon className="h-2 w-2" aria-hidden="true" />
          ) : state.sortByRole === "desc" ? (
            <ArrowUpIcon className="h-2 w-2" aria-hidden="true" />
          ) : (
            <div />
          )}
        </button>
        <button
          onClick={() => {
            actions.setSort("sortByDepartment");
          }}
          className="inline-flex items-center hover:text-blue-500 focus:outline-none ml-2 text-xs font-bold text-gray-900"
        >
          <span className="mr-1">Department</span>
          {state.sortByDepartment === "asc" ? (
            <ArrowDownIcon className="h-2 w-2" aria-hidden="true" />
          ) : state.sortByDepartment === "desc" ? (
            <ArrowUpIcon className="h-2 w-2" aria-hidden="true" />
          ) : (
            <div />
          )}
        </button>
        <button
          onClick={() => {
            actions.setSort("sortByEducation");
          }}
          className="inline-flex items-center hover:text-blue-500 focus:outline-none ml-2 text-xs font-bold text-gray-900"
        >
          <span className="mr-1">Education</span>
          {state.sortByEducation === "asc" ? (
            <ArrowDownIcon className="h-2 w-2" aria-hidden="true" />
          ) : state.sortByEducation === "desc" ? (
            <ArrowUpIcon className="h-2 w-2" aria-hidden="true" />
          ) : (
            <div />
          )}
        </button>
        <button
          onClick={() => {
            actions.setSort("sortByExperience");
          }}
          className="inline-flex items-center hover:text-blue-500 focus:outline-none ml-2 text-xs font-bold text-gray-900"
        >
          <span className="mr-1">Experience</span>
          {state.sortByExperience === "asc" ? (
            <ArrowDownIcon className="h-2 w-2" aria-hidden="true" />
          ) : state.sortByExperience === "desc" ? (
            <ArrowUpIcon className="h-2 w-2" aria-hidden="true" />
          ) : (
            <div />
          )}
        </button>
      </div>
    </div>
  );
}
