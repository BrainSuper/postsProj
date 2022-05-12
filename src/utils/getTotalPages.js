export const getTotalPages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}
export const getPages = (totalPages) => {
    let response = [];
    for (let i = 0; i < totalPages; i++) {
        response.push(i + 1);
    }
    return response;
}