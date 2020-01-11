import { renderToString } from "react-dom/server";
import {
    ServerStyleSheet,
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS,
} from "styled-components";

export const styledHtml = (
    element: React.ReactElement,
): { html?: string; styleTags?: string } => {
    const sheet = new ServerStyleSheet();
    const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;
    StyleSheet.reset(true);
    try {
        const html = renderToString(sheet.collectStyles(element));
        const styleTags = sheet.getStyleTags();
        return { html, styleTags };
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    } finally {
        sheet.seal();
    }
    return {};
};
