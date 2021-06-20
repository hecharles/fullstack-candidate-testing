import { allJobs } from "../../data/jobsData";
import { searchJobs, cacheGet, cachePut } from "../../utils";

const CACHE_TIMEOUT = 1000 * 120;

export default async (req, res) => {
  //using memory cache
  const cachedData = cacheGet(req.url);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  const { search, filterBy, filterByValue } = req.query;

  // @todo: implement filters and search
  // @todo: implement automated tests
  const jobsResult = searchJobs({ allJobs, search, filterBy, filterByValue });

  //save to memory cache
  cachePut(req.url, jobsResult, CACHE_TIMEOUT);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order

  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  return res.status(200).json(jobsResult);
};
