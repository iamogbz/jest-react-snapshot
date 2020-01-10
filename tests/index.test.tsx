import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import { imageToMatchSnapshot } from "../src";
import {
    UglyButtonA,
    UglyButtonB,
    UglyButtons,
} from "./__mocks__/reactComponents";

configure({ adapter: new Adapter() });
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
            const wrapper = shallow(<Component {...props} />);
            await expect(wrapper).imageToMatchSnapshot();
        },
    );
});
