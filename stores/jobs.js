import { createStore, createHook } from "react-sweet-state";
import { baseUrl } from "../config";
import { searchJobs } from "../utils";

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
        const newState = {};

        newState[sortBy] = "asc";

        if (getState()[sortBy] === "asc") {
          newState[sortBy] = "desc";
        }
        if (getState()[sortBy] === "desc") {
          newState[sortBy] = null;
        }

        setState(newState);
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
          filterSearch.push(`search=${search}`);
        }

        if (
          filterBy &&
          filterBy.trim().length > 0 &&
          filterByValue &&
          filterByValue.trim().length > 0
        ) {
          filterSearch.push(`filterBy=${filterBy}`);
          filterSearch.push(`filterByValue=${filterByValue}`);
        }

        try {
          const resFilters = await fetch(
            `${baseUrl}/api/jobs?${filterSearch.join("&")}`
          );
          const data = await resFilters.json();

          setState({
            resultData: data,
          });
        } catch (err) {
          // if connection offline
          console.log(err);
          const jobsResult = searchJobs({
            allJobs: getState().allData,
            search,
            filterBy,
            filterByValue,
          });
        }
        setState({
          loading: false,
          sortByLocation: null,
          sortByRole: null,
          sortByDepartment: null,
          sortByEducation: null,
          sortByExperience: null,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: "jobs",
});

export const useJobsStore = createHook(Store);
