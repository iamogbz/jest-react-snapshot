import { renderToString } from "react-dom/server";

import {
    ServerStyleSheet,
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS,
} from "styled-components";
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
    const image = htmlImage(styledHtml(recieved));
    return configureToMatchImageSnapshot(options).bind(this)(image);
}
