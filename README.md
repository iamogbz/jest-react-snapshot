# Jest React Snapshot

<span><img alt="logo" align="right" width="144" height="144" src="./assets/logo.png"/></span>

[![Dependabot badge](https://badgen.net/dependabot/iamogbz/jest-react-snapshot/?icon=dependabot)](https://app.dependabot.com)
[![Dependencies](https://david-dm.org/iamogbz/jest-react-snapshot.svg)](https://github.com/iamogbz/jest-react-snapshot)
[![Build Status](https://github.com/iamogbz/jest-react-snapshot/workflows/Build/badge.svg)](https://github.com/iamogbz/jest-react-snapshot/actions)
[![Coverage Status](https://coveralls.io/repos/github/iamogbz/jest-react-snapshot/badge.svg?branch=refs/heads/master)](https://coveralls.io/github/iamogbz/jest-react-snapshot?branch=refs/heads/master)
[![NPM Version](https://img.shields.io/npm/v/jest-react-snapshot.svg)](https://www.npmjs.com/package/jest-react-snapshot)

> Snapshot react components as images in jest tests

## Usage

```typescript
import { imageToMatchSnapshot } from "jest-react-snapshot";

expect.extend({ imageToMatchSnapshot });

it("renders component matching snapshot", async (): Promise<void> => {
    await expect(<Component {...props} />).imageToMatchSnapshot();
});
```

See [repo test](./tests/index.test.tsx) for more details.

![image-to-match-snapshot](tests/__image_snapshots__/index-test-tsx-image-to-match-snapshot-renders-component-as-image-and-matches-snapshot-3-snap.png)

### Advanced Usage

Uses [`jest-image-snapshot`](https://github.com/americanexpress/jest-image-snapshot) to power the image snapshot and diffing functionality.

Supports the `toMatchImageSnapshot` [API](https://github.com/americanexpress/jest-image-snapshot#%EF%B8%8F-api), providing some default configuration.

```typescript
await expect(<Component {...props} />).imageToMatchSnapshot(customOptions);
```

### Test Environment Setup

Easiest way is to use [`jest-puppeeter`](https://github.com/smooth-code/jest-puppeteer) which provides sensible defaults for your testing environment.

#### Example Jest Config

```json
    "jest": {
        "preset": "jest-puppeteer",
        "moduleDirectories": [
            "./src",
            "./tests",
            "./node_modules"
        ],
        "transform": {
            "^.+\\.tsx?$": "ts-jest"
        },
        "testPathIgnorePatterns": [
            "./artifacts/",
            "./node_modules/"
        ]
    }
```

## Further Work

- Replace `puppeteer` with lighter renderer as only the `HTML` and `CSS` layout engine is used.
