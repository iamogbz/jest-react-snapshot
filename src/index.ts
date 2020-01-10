import { CommonWrapper } from "enzyme";
import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
} from "jest-image-snapshot";

/**
 * TODO: implement html rendering
 */
const htmlToImage = (html: string): Buffer => new Buffer(html);

export async function imageToMatchSnapshot(
    recieved: CommonWrapper,
    options: MatchImageSnapshotOptions,
): Promise<jest.CustomMatcherResult> {
    const image = htmlToImage(recieved.html());
    return configureToMatchImageSnapshot(options).bind(this)(image);
}
