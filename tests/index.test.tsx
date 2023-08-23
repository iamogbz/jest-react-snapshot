import * as React from "react";

import { imageToMatchSnapshot } from "../src";
import { SingleDivElements } from "./__mocks__/reactComponents";
import { Burger } from "./__mocks__/Burger";
import { Polaroid } from "./__mocks__/Polaroid";

expect.extend({ imageToMatchSnapshot });

beforeEach(async () => {
  await jestPuppeteer.resetPage();
});

describe("imageToMatchSnapshot", (): void => {
  it.each([
    [Burger, {}],
    [Polaroid, {}],
    [SingleDivElements, {}],
  ])(
    "renders component as image and matches snapshot",
    async (Component, props): Promise<void> => {
      await expect(<Component {...props} />).imageToMatchSnapshot({
        viewportSizePx: { height: 512, width: 1536 },
      });
    },
  );
});
