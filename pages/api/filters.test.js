import { createMocks } from "node-mocks-http";
import filtersHandler from "./filters";
import filtersData from "../../data/filters.json";

test("it should return the original data", async () => {
  const { req, res } = createMocks({
    url: "/api/filters",
    method: "GET",
  });

  await filtersHandler(req, res);

  expect(res._getStatusCode()).toBe(200);
  expect(JSON.stringify(JSON.parse(res._getData()))).toMatch(
    JSON.stringify(filtersData)
  );
});
