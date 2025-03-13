export type ResponseObject<T> = {
    data: T;
    message: string;
    statusCode: number;
    success: boolean;
};

export type PaginatedResponse<T> = {
    data: T[];
    total: number;
    skip: number;
    limit: number;
};

export type Params<T extends string = string> = Promise<{ [K in T]: string }>;
export type SearchParams<T extends string = string> = Promise<{ [K in T]: string | string[] | undefined }>;
