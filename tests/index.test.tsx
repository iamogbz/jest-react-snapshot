/**
 * @jest-environment node
 */
import * as React from "react";

import { imageToMatchSnapshot } from "../src";
import {
    UglyButtonA,
    UglyButtonB,
    UglyButtons,
} from "./__mocks__/reactComponents";

expect.extend({ imageToMatchSnapshot });

describe("imageToMatchSnapshot", (): void => {
    const testCases = [
        [UglyButtonA, {}],
        [UglyButtonB, {}],
        [UglyButtons, {}],
    ];
    it.each(testCases)(
        "renders component as image and matches snapshot",
        async (Component: React.ReactType, props): Promise<void> => {
            await expect(<Component {...props} />).imageToMatchSnapshot();
        },
    );
});
