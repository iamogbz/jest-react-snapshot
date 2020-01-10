import React, { ReactElement } from "react";

import { imageToMatchSnapshot } from "../src";
import * as mockComponents from "./__mocks__/reactComponents";

expect.extend({ imageToMatchSnapshot });

describe("imageToMatchSnapshot", (): void => {
    const testCases = [
        [mockComponents.UglyButtonA, {}],
        [mockComponents.UglyButtonB, {}],
        [mockComponents.UglyButtons, {}],
    ];
    it.each(testCases)(
        "renders %s as image and matches snapshot",
        (Component: ReactElement, props): void => {
            expect(<Component {...props} />).imageToMatchSnapshot();
        },
    );
});
