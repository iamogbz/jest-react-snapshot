import domtoimage from "dom-to-image";
import { CommonWrapper } from "enzyme";
import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
} from "jest-image-snapshot";

export const imageToMatchSnapshot = (
    recieved: CommonWrapper,
    options: MatchImageSnapshotOptions,
): jest.CustomMatcherResult =>
    configureToMatchImageSnapshot(options)(domtoimage.toPng(recieved.html()));
