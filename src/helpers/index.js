export function getImgSize (url, width, height) {
    return url.replace(
        '{width}',
        width
    ).replace(
        '{height}',
        height
    );
}

export function getQueryParamsID (array) {
    let queryParams = '';
    array.map((id) => queryParams += `id=${id}&`);
    return queryParams;
}

export function getNumberWithSpaces (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/gu, ' ');
}
