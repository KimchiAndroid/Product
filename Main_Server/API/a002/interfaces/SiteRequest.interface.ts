import { ProductListResponse } from '../Common/action';

export interface SiteListRequest {
    filter: {
        categoryDepth: number;
        categorySeq: number;
        color: string;
        condition: {
            options: { flawedYn: number; fullPackageYn: number; limitedEditionYn: number };
            productCondition: number;
        };
        locations?: [{ locationCode: string; locationType: number }];
        maxPrice: number;
        minPrice: number;
        platformType: number;
        preferredTrade: number;
        sortEndDate: string;
        sortStartDate: string;
        state: number;
        productSectionType: number;
    };
    isSearchSaved: number;
    searchQuantity?: number;
    searchWord: string;
    sort: { date: number; order: number; price: number };
    startIndex?: number;
}
export interface ListResult {
    list: ProductListResponse[];
}
