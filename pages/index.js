import React, { useEffect } from "react";
import Head from "next/head";
import {
  Header,
  Footer,
  SearchBox,
  LeftFilter,
  SortHeader,
  JobsContainer,
} from "../components";
import { baseUrl } from "../config";
import { allJobs } from "../data/jobsData";
import { useJobsStore } from "../stores";

function Index({ filtersData, jobsData }) {
  const [state, actions] = useJobsStore();

  useEffect(() => {
    actions.initalData(jobsData);
  }, []);

  return (
    <>
      <Head>
        <title>HEALTH EXPLORER</title>
        <meta name="keywords" content="health, nurse, doctor, hospital" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <SearchBox />
        <main className="m-4 mt-4">
          <div className="mt-4">
            <div className="md:flex">
              <div className="hidden md:block md:w-1/4 md:pr-4">
                <LeftFilter data={filtersData} />
              </div>
              <div className="md:w-3/4">
                <div className="p-4 pl-8 pr-8 rounded-lg bg-white overflow-hidden shadow w-full">
                  <SortHeader />
                  <JobsContainer data={jobsData} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let filtersData = {};
  try {
    const resFilters = await fetch(`${baseUrl}/api/filters`);
    filtersData = await resFilters.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      filtersData: filtersData,
      jobsData: allJobs,
    },
  };
};

export default Index;
