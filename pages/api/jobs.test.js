import { createMocks } from "node-mocks-http";
import jobsHandler from "./jobs";

test("test default, it should return all data", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs",
    method: "GET",
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());
  expect(data.length).toBe(120);
  expect(data[0].job_id).toBe(3860);
});

test("Test search, it should return list data search Oncology Nurse", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs?search=Oncology Nurse",
    method: "GET",
    query: {
      search: "Oncology Nurse",
    },
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());

  expect(data.length).toBe(10);
  expect(data[0].job_title).toBe("Oncology Nurse");
});

test("Test filter Job Type, it should return list data search Oncology Nurse", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs?filterBy=job_type&filterByValue=Full-time",
    method: "GET",
    query: {
      filterBy: "job_type",
      filterByValue: "Full-time",
    },
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());

  expect(data.length).toBe(33);
  expect(data[0].job_type).toBe("Full-time");
});

test("Test filter Department, it should return list data search Oncology Nurse", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs?filterBy=department&filterByValue=Surgery",
    method: "GET",
    query: {
      filterBy: "department",
      filterByValue: "Surgery",
    },
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());

  expect(data.length).toBe(41);
  expect(data[0].department[0]).toBe("Surgery");
});

test("Test filter Work Schedule, it should return list data search Oncology Nurse", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs?filterBy=work_schedule&filterByValue=Night shift",
    method: "GET",
    query: {
      filterBy: "work_schedule",
      filterByValue: "Night shift",
    },
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());

  expect(data.length).toBe(62);
  expect(data[0].work_schedule).toBe("Night shift");
});

test("Test filter Experience, it should return list data search Oncology Nurse", async () => {
  const { req, res } = createMocks({
    url: "/api/jobs?filterBy=experience&filterByValue=Junior",
    method: "GET",
    query: {
      filterBy: "experience",
      filterByValue: "Junior",
    },
  });

  await jobsHandler(req, res);
  expect(res._getStatusCode()).toBe(200);
  const data = JSON.parse(res._getData());

  expect(data.length).toBe(29);
  expect(data[0].experience).toBe("Junior");
});
