import * as rp from 'request-promise';
import { ProductListRequest, ProductListResponse } from '../../Common';
import { SiteListRequest } from '../../interfaces/SiteRequest.interface';
import { APISite } from '../../option';
import { responseMapping } from './responseMapping';
import { SiteListResponse } from '../../interfaces/SiteResponse.interface';

const scrapComponent = async (search_word: string, page: string): Promise<string> => {
    return rp.post(APISite, requestOption(search_word, page));
};

const requestOption = (search_word: string, page: string) => ({
    body: JSON.stringify(makejson(search_word, page)),
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

const scrapAllComponent = async (search_word: string): Promise<string[]> => {
    const result = await rp.post(APISite, requestOption(search_word, '1'));
    const tempResult: { data: SiteListResponse[] } = JSON.parse(result);
    const count = tempResult.data[0].totalCnt < 10000 ? tempResult.data[0].totalCnt : 10000;
    const count_array = Array(Math.floor(count / 60)).fill('');

    const requestArray = count_array.map((_, index) => {
        return rp.post(APISite, requestOption(search_word, String(index + 1)));
    });
    return Promise.all(requestArray);
};

export const mapping = async ({ search_word, page }: ProductListRequest) => {
    const mappingFunction = (value: string) => {
        const response = JSON.parse(value);
        const mappingArray: ProductListResponse[] = response.data.map((element: SiteListResponse) =>
            responseMapping(element),
        );
        return mappingArray;
    };
    if (page !== '') {
        return scrapComponent(search_word, page).then(mappingFunction);
    }
    return scrapAllComponent(search_word).then(value_list => {
        return value_list.reduce((acc: ProductListResponse[], cur) => {
            acc = acc.concat(mappingFunction(cur));
            return acc;
        }, []);
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
    searchQuantity: 60,
    searchWord: keyword,
    sort: { date: 0, order: 0, price: 0 },
    startIndex: parseInt(pageNum, 10) - 1,
});
