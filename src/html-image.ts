export const htmlImage = async ({
  html,
  styleTags,
}: {
  html?: string;
  styleTags?: string;
}): Promise<string> => {
  const styledHtml = `<html><head>${styleTags}</head><body>${html}</body></html>`;
  await page.setContent(styledHtml);
  return page.screenshot();
};
