import { QueryParams } from "@/types";

export const getQueryString = (params?: QueryParams) => {
    let queryString = "";
    if (!params) return queryString;

    for (const [key, value] of Object.entries(params)) {
        queryString += `${key}=${value}&`;
    }

    if (queryString) {
        queryString = `?${queryString}`;
    }

    if (queryString.endsWith("&")) {
        queryString = queryString.slice(0, -1);
    }

    return queryString;
};
