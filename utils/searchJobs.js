import Fuse from "fuse.js";
import _ from "lodash";

export function searchJobs({ allJobs, search, filterBy, filterByValue }) {
  let jobsResult = [...allJobs];

  if (!search && !filterBy && !filterByValue) {
    return jobsResult;
  }

  if (filterBy && filterByValue) {
    jobsResult = [];
    switch (filterBy) {
      case "job_type":
        _.each(allJobs, (job) => {
          if (job.job_type === filterByValue) {
            jobsResult.push(job);
          }
        });
        break;
      case "work_schedule":
        _.each(allJobs, (job) => {
          if (job.work_schedule === filterByValue) {
            jobsResult.push(job);
          }
        });
        break;
      case "experience":
        _.each(allJobs, (job) => {
          if (job.experience === filterByValue) {
            jobsResult.push(job);
          }
        });
        break;
      case "department":
        _.each(allJobs, (job) => {
          if (job.department.indexOf(filterByValue) > -1) {
            jobsResult.push(job);
          }
        });
        break;
      default:
        break;
    }
  }

  if (!search) {
    return jobsResult;
  }

  //inital fuse data
  const fuseOptions = {
    includeScore: false,
    includeMatches: false,
    threshold: 0.3,
    keys: ["type", "job_title", "name"],
  };

  const fuse = new Fuse([...jobsResult], fuseOptions);

  jobsResult = [];
  const searchResult = fuse.search(search);
  _.each(searchResult, (result) => {
    jobsResult.push(result.item);
  });

  return jobsResult;
}
