import {
  configureToMatchImageSnapshot,
  MatchImageSnapshotOptions,
} from "jest-image-snapshot";
import { styledHtml } from "./react-html";
import { htmlImage } from "./html-image";

export type ImageMatchSnapshotOptions = MatchImageSnapshotOptions & {
  viewportSizePx?: { height: number; width: number };
};

const defaultOptions: ImageMatchSnapshotOptions = {
  blur: 2,
  customDiffConfig: { threshold: 0.05 },
  failureThreshold: 0.05,
  failureThresholdType: "percent",
  viewportSizePx: { height: 1024, width: 1024 },
};

export async function imageToMatchSnapshot(
  recieved: React.ReactElement,
  options: ImageMatchSnapshotOptions = {},
): Promise<jest.CustomMatcherResult> {
  const { viewportSizePx, ...matchImageSnapshotOptions } = {
    ...defaultOptions,
    ...options,
  };
  await page.setViewport(viewportSizePx);
  const image = await htmlImage(styledHtml(recieved));
  return configureToMatchImageSnapshot(matchImageSnapshotOptions).bind(this)(
    image,
  );
}
