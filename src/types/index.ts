export type ResponseObject<T> = {
    data: T;
    message: string;
    statusCode: number;
    success: boolean;
};

export type PaginatedResponse<T> = {
    success: boolean;
    data: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
    };
};

export const defaultPaginatedData = { data: [], success: false, meta: { total: 0, page: 0, limit: 0 } };
export type QueryParams = Record<string, string | number>;

export type Params<T extends string = string> = Promise<{ [K in T]: string }>;
export type SearchParams<T extends string = string> = Promise<{ [K in T]: string | string[] | undefined }>;
