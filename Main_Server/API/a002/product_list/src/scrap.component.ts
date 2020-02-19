import * as rp from 'request-promise';
import { ProductListRequest, ProductListResponse } from '../../Common';
import { SiteListRequest } from '../../interfaces/SiteRequest.interface';
import { APISite } from '../../option';
import { responseMapping } from './responseMapping';

const scrapComponent = (search_word: string, page: string) => {
    const options = {
        body: JSON.stringify(makejson(search_word, page)),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    };
    return rp.post(APISite, options);
};

export const mapping = async ({ search_word, page }: ProductListRequest) => {
    return scrapComponent(search_word, page).then(value => {
        const response = JSON.parse(value);
        const mappingArray: ProductListResponse[] = response.data.map(function(element: any) {
            return responseMapping(element);
        });
        return mappingArray;
    });
};

const makejson = (keyword: string, pageNum: string): SiteListRequest => ({
    filter: {
        categoryDepth: 0,
        categorySeq: 0,
        color: '',
        condition: {
            options: { flawedYn: 0, fullPackageYn: 0, limitedEditionYn: 0 },
            productCondition: -1,
        },
        locations: [{ locationCode: '', locationType: -1 }],
        maxPrice: 0,
        minPrice: 0,
        platformType: 1,
        preferredTrade: 0,
        sortEndDate: '',
        sortStartDate: '',
        state: -1,
        productSectionType: 0,
    },
    isSearchSaved: 0,
    searchQuantity: Number(pageNum) * 60,
    searchWord: keyword,
    sort: { date: 0, order: 0, price: 0 },
    startIndex: (Number(pageNum) - 1) * 60,
});
