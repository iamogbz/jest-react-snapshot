import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
} from "jest-image-snapshot";
import { styledHtml } from "./react-html";
import { htmlImage } from "./html-image";

export async function imageToMatchSnapshot(
    recieved: React.ReactElement,
    options: MatchImageSnapshotOptions,
): Promise<jest.CustomMatcherResult> {
    const image = await htmlImage(styledHtml(recieved));
    return configureToMatchImageSnapshot(options).bind(this)(image);
}
