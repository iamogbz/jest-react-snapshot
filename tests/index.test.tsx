import * as React from "react";

import { imageToMatchSnapshot } from "../src";
import {
    UglyButtonA,
    UglyButtonB,
    UglyButtons,
} from "./__mocks__/reactComponents";

expect.extend({ imageToMatchSnapshot });

beforeEach(async () => {
    await jestPuppeteer.resetPage();
});

describe("imageToMatchSnapshot", (): void => {
    const testCases = [
        [UglyButtonA, {}],
        [UglyButtonB, {}],
        [UglyButtons, {}],
    ];
    it.each(testCases)(
        "renders component as image and matches snapshot",
        async (Component: React.ReactType, props): Promise<void> => {
            await page.setViewport({ width: 200, height: 200 });
            await expect(<Component {...props} />).imageToMatchSnapshot();
        },
    );
});
