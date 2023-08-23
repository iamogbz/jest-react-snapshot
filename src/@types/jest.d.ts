import { ImageMatchSnapshotOptions } from "index";

declare global {
  namespace jest {
    interface Matchers<R> {
      imageToMatchSnapshot(options?: ImageMatchSnapshotOptions): Promise<R>;
    }
  }
}
