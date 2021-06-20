import React, { useState } from "react";
import moment from "moment";

export function JobItem({ data }) {
  const [expandJobSummary, setExpandJobSummary] = useState(false);

  let expandUi;

  if (expandJobSummary) {
    expandUi = (
      <div className="md:grid grid-cols-6 gap-4 items-center pt-2">
        <div className="col-start-1 col-span-5">
          <div className="mb-2 md:grid grid-cols-4 gap-4">
            <div className="col-start-1 col-span-1 text-sm font-bold text-gray-900 mr-6">
              {"Department:"}
            </div>
            <div className="col-end-5 col-span-3 text-sm text-gray-900">
              {data.department.join(",")}
            </div>
          </div>
          <div className="mb-2 md:grid grid-cols-4 gap-4">
            <div className="col-start-1 col-span-1 text-sm font-bold text-gray-900 mr-6">
              {"Hour / shifts:"}
            </div>
            <div className="col-end-5 col-span-3 text-sm text-gray-900 ">
              {`${data.hours.join(",")} hours/ ${data.work_schedule}`}
            </div>
          </div>
          <div className="mb-2 md:grid grid-cols-4 gap-4">
            <div className="col-start-1 col-span-1 text-sm font-bold text-gray-900 mr-6">
              {"Summary"}
            </div>
            <div className="col-end-5 col-span-3 text-sm text-gray-900">
              {data.description}
            </div>
          </div>
        </div>
        <div className="col-end-7 col-span-1">
          <div className="text-sm text-gray-700 md:flex items-end flex-col">
            <button
              type="button"
              className="whitespace-nowrap inline-flex items-center justify-end px-4 py-2 border border-blue-600 rounded-md shadow-sm text-xs text-white bg-blue-500 hover:border-blue-700 focus:outline-none"
            >
              Job details
            </button>
            <button
              type="button"
              className="ml-2 mt-2 whitespace-nowrap inline-flex items-center justify-end px-4 py-2 border border-blue-600 rounded-md shadow-sm text-xs text-blue-500 bg-white hover:border-blue-700 focus:outline-none"
            >
              Save job
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t-2 mb-2">
      <div className="md:flex justify-between items-center pt-2">
        <div className="">
          <button
            onClick={() => setExpandJobSummary(!expandJobSummary)}
            className="text-base font-bold text-gray-900 hover:text-blue-500 focus:outline-none"
          >
            {data.job_title}
          </button>
          <div className="text-base text-gray-900">
            {`${data.job_type} | $${data.salary_range[0]} - $${data.salary_range[1]} an hour | ${data.city}`}
          </div>
        </div>
        <div className="text-base text-gray-700">
          {moment(data.created).fromNow()}
        </div>
      </div>
      {expandUi}
    </div>
  );
}
