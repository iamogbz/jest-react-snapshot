// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MatchImageSnapshotOptions } from "jest-image-snapshot";

declare global {
  namespace jest {
    interface Matchers<R> {
      imageToMatchSnapshot(options?: MatchImageSnapshotOptions): Promise<R>;
    }
  }
}
