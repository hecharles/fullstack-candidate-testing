import { FilterBox } from "./FilterBox";

export function LeftFilter({ data }) {
  return (
    <>
      <FilterBox filterId="job_type" title="JOB TYPE" items={data.job_type} />
      <FilterBox
        filterId="department"
        title="DEPARTMENT"
        items={data.department}
      />
      <FilterBox
        filterId="work_schedule"
        title="WORK SCHEDULE"
        items={data.work_schedule}
      />
      <FilterBox
        filterId="experience"
        title="EXPERIENCE"
        items={data.experience}
      />
    </>
  );
}
