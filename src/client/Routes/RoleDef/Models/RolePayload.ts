import { SearchTypeEnum, SearchKeyEnum } from "Types/Domain";

export interface IRolePayload {
    from: Number,
    size: Number,
    filter: Filter[],
    query: Query[]
}

export interface Filter {
    type: SearchTypeEnum,
    key: SearchKeyEnum,
    modelfield: string,
    value: string | Array<string> | any,
}

export interface Query extends Filter {
    options?: any
}