export function getImgSize (url, width, height) {
    return url.replace(
        '{width}',
        width
    ).replace(
        '{height}',
        height
    );
}
