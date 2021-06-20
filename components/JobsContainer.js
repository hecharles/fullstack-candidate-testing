import _ from "lodash";
import { useJobsStore } from "../stores";
import { JobList } from "./JobList";
import { Loader } from "./Loader";

export function JobsContainer({ data }) {
  const [state] = useJobsStore();

  const hospitalHashKey = {};
  const result = [];

  // grouping by hospital
  _.each(state.resultData, (job) => {
    if (!hospitalHashKey[`${job.name}`]) {
      hospitalHashKey[`${job.name}`] = {
        total_jobs_in_hospital: 0,
        name: job.name,
        items: [],
      };
    }
    hospitalHashKey[`${job.name}`].items.push(job);
    hospitalHashKey[`${job.name}`].total_jobs_in_hospital++;
  });

  // to flat array
  _.each(hospitalHashKey, (jobGroup) => {
    result.push(jobGroup);
  });

  let loadingUi;

  if (state.loading) {
    loadingUi = <Loader />;
  }
  return (
    <div className="mt-4">
      {loadingUi}
      {result.map((item, idx) => (
        <JobList data={item} key={idx} />
      ))}
    </div>
  );
}
