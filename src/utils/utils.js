import {parse} from 'query-string'

export const repoLink = "https://github.com/Alvepoe/MyTona_Test_Task.git";
export const pageSize = 5;
export const apiKey = "0d4c34af020a4855a7f0e2df70cde317";
export const baseUrl = "https://newsapi.org/v2";

export const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
};

export const getCurrentPage = search => {
    const parsedSearch = parse(search);
    return parsedSearch.page ? Number(parsedSearch.page) : 1;
};