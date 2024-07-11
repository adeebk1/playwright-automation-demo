// @ts-check
const { test, expect, request } = require("@playwright/test");
const { testConfig } = require("../utils/testData");


test('API response should have title "delectus aut autem"', async ({}) => {
  const requestContext = await request.newContext();

  const response = await requestContext.get(
    testConfig.APIURI
  );
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  console.log("---TITLE--- "+responseBody.title);
  expect(responseBody.title).toBe(testConfig.APItitle);
  await requestContext.dispose();
});
