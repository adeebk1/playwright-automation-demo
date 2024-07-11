To Install Playwright

```sh {"id":"01HYD4KB56TNQ0575X3YKEBXEB"}
npx playwright install
```

To download dependencies

```sh {"id":"01HYD44F0BS6CDX1H2BHNZ939R"}
npm i
```

To Run API test cases

npx playwright test test_API.spec.js
```

To Run Web test cases

```sh {"id":"01HYD3YRE3GEME81WHPCV808CK"}
npx playwright test test_UI.spec.js
```

To Run Web Test cases in headed mode use "--headed" with the run command

```sh {"id":"01HYD4Q9S2WHM5F99D6Z4Q738F"}
npx playwright test test_UI.spec.js --headed
```

To Run All Test cases

```sh {"id":"01HYD3ZYZ89JJ668ASY45N472G"}
npx playwright test
```

To view Report

```sh {"id":"01HYD418YWZAJ0XYXT9XR65D3T"}
npx playwright show-report
```