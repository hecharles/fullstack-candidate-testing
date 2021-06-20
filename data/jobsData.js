import jobs from "./jobs";
import _ from "lodash";

//make data flat
const flatJobsData = [];
_.each(jobs, (doc) => {
  _.each(doc.items, (job) => {
    flatJobsData.push(job);
  });
});

export const allJobs = [...flatJobsData];
