import { MatchImageSnapshotOptions } from "jest-image-snapshot";

declare namespace jest {
    interface Matchers<R, T> {
        imageToMatchSnapshot(options?: MatchImageSnapshotOptions): R;
    }
}
