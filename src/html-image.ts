export const htmlImage = ({
    html,
    styleTags,
}: {
    html?: string;
    styleTags?: string;
}): Buffer => {
    // TODO: implement html rendering
    // eslint-disable-next-line no-console
    console.log(html, styleTags);
    return new Buffer([]);
};
