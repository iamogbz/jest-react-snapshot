import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

export const styledHtml = (
  element: React.ReactElement,
): { html?: string; styleTags?: string } => {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(element));
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
