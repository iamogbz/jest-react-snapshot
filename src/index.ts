import {
  configureToMatchImageSnapshot,
  MatchImageSnapshotOptions,
} from "jest-image-snapshot";
import { styledHtml } from "./react-html";
import { htmlImage } from "./html-image";

const defaultOptions: MatchImageSnapshotOptions = {
  blur: 2,
  customDiffConfig: { threshold: 0.5 },
  failureThreshold: 0.05,
  failureThresholdType: "percent",
};

export async function imageToMatchSnapshot(
  recieved: React.ReactElement,
  options: MatchImageSnapshotOptions = {},
): Promise<jest.CustomMatcherResult> {
  const image = await htmlImage(styledHtml(recieved));
  return configureToMatchImageSnapshot({
    ...defaultOptions,
    ...options,
  }).bind(this)(image);
}
