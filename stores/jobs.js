import { createStore, createHook } from "react-sweet-state";
import { baseUrl } from "../config";
import { searchJobs } from "../utils";
import { sort } from "fast-sort";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    loading: false,
    allData: [],
    resultData: [],
    search: "",
    filterBy: null,
    filterByValue: null,
    sortByLocation: null,
    sortByRole: null,
    sortByDepartment: null,
    sortByEducation: null,
    sortByExperience: null,
  },
  // actions that trigger store mutation
  actions: {
    initalData:
      (data) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          allData: data,
          resultData: data,
        });
      },
    setSort:
      (sortBy) =>
      ({ setState, getState }) => {
        if (sortBy) {
          const newState = {};

          newState[sortBy] = "asc";

          if (getState()[sortBy] === "asc") {
            newState[sortBy] = "desc";
          }
          if (getState()[sortBy] === "desc") {
            newState[sortBy] = null;
          }
          setState(newState);
        }

        const {
          resultData,
          sortByLocation,
          sortByRole,
          sortByDepartment,
          sortByEducation,
          sortByExperience,
        } = getState();
        const sortParams = [];

        if (sortByLocation) {
          if (sortByLocation === "asc") {
            sortParams.push({ asc: (u) => u.location });
          } else if (sortByLocation === "desc") {
            sortParams.push({ desc: (u) => u.location });
          } else {
            sortParams.push({ asc: (u) => u.location });
          }
        }

        if (sortByRole) {
          if (sortByRole === "asc") {
            sortParams.push({ asc: (u) => u.job_title });
          } else if (sortByRole === "desc") {
            sortParams.push({ desc: (u) => u.job_title });
          } else {
            sortParams.push({ asc: (u) => u.job_title });
          }
        }

        if (sortByDepartment) {
          if (sortByDepartment === "asc") {
            sortParams.push({ asc: (u) => u.department });
          } else if (sortByDepartment === "desc") {
            sortParams.push({ desc: (u) => u.department });
          } else {
            sortParams.push({ asc: (u) => u.department });
          }
        }

        if (sortByEducation) {
          if (sortByEducation === "asc") {
            sortParams.push({ asc: (u) => u.required_credentials });
          } else if (sortByEducation === "desc") {
            sortParams.push({ desc: (u) => u.required_credentials });
          } else {
            sortParams.push({ asc: (u) => u.required_credentials });
          }
        }

        if (sortByExperience) {
          if (sortByExperience === "asc") {
            sortParams.push({ asc: (u) => u.experience });
          } else if (sortByExperience === "desc") {
            sortParams.push({ desc: (u) => u.experience });
          } else {
            sortParams.push({ asc: (u) => u.experience });
          }
        }

        const sortedResultData = sort(resultData).by(sortParams);

        setState({ resultData: sortedResultData });
      },
    setFilter:
      ({ filterBy, filterByValue }) =>
      ({ setState, getState }) => {
        if (getState().filterByValue === filterByValue) {
          setState({
            filterBy: null,
            filterByValue: null,
          });
          return;
        }
        setState({
          filterBy,
          filterByValue,
        });
      },
    setSearch:
      (search) =>
      ({ setState, getState }) => {
        setState({
          search,
        });
      },

    callJobsApi:
      () =>
      async ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          loading: true,
        });

        const { search, filterBy, filterByValue } = getState();

        const filterSearch = [];

        if (search && search.trim().length > 0) {
          filterSearch.push(`search=${encodeURIComponent(search)}`);
        }

        if (
          filterBy &&
          filterBy.trim().length > 0 &&
          filterByValue &&
          filterByValue.trim().length > 0
        ) {
          filterSearch.push(`filterBy=${encodeURIComponent(filterBy)}`);
          filterSearch.push(
            `filterByValue=${encodeURIComponent(filterByValue)}`
          );
        }

        let resultData = getState().allData;
        try {
          const resFilters = await fetch(
            `${baseUrl}/api/jobs?${filterSearch.join("&")}`
          );
          resultData = await resFilters.json();
        } catch (err) {
          // if connection offline
          console.log(err);
          resultData = searchJobs({
            allJobs: getState().allData,
            search,
            filterBy,
            filterByValue,
          });
        }

        setState({
          resultData: resultData,
          loading: false,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "jobs",
});

export const useJobsStore = createHook(Store);
