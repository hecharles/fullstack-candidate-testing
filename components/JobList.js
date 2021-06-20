import React, { useState } from "react";
import { JobItem } from "./JobItem";

export function JobList({ data }) {
  const { name, total_jobs_in_hospital, items } = data;

  const [expandJobSummary, setExpandJobSummary] = useState(false);

  let expandUi;

  if (expandJobSummary) {
    expandUi = (
      <>
        {items.map((item, idx) => (
          <JobItem data={item} key={idx} />
        ))}
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => setExpandJobSummary(!expandJobSummary)}
        className="flex pb-2 hover:text-blue-500 focus:outline-none"
      >
        <div className="mr-4">
          <div className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-gray-400">
            <span className="text-xs font-medium leading-none text-white">
              {name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="text-left">{`${total_jobs_in_hospital} jobs for ${name}`}</div>
      </button>
      {expandUi}
    </>
  );
}
