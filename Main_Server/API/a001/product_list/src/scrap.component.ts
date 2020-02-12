import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';
import { ProductListRequest, ProductDetailResponse, ProductListResponse } from '../../Common';

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const page_type_num = parseInt(page, 10);
    const quotient = Math.floor(page_type_num / 6);
    const remainder = page_type_num % 6;

    /** case 0, 1 제외, 모든 case 적용 */
    const page_input_first = (page_type_num - (quotient + 2)).toString();
    const page_input_second = (page_type_num - (quotient + 2) + 1).toString();

    switch (remainder) {
        case 0:
            const page_input_case_0 = (page_type_num - (quotient + 1)).toString();
            const case_0_first = (
                await fifthPerPage({ search_word, page: page_input_case_0 })
            ).slice(10, 60);
            return case_0_first;
        case 1:
            const page_input_case_1 = (page_type_num - (quotient + remainder)).toString();
            const case_1_first = (
                await fifthPerPage({ search_word, page: page_input_case_1 })
            ).slice(0, 50);
            return case_1_first;
        case 2:
            const case_2_first = (
                await fifthPerPage({ search_word, page: page_input_first })
            ).slice(50, 60);
            const case_2_second = (
                await fifthPerPage({ search_word, page: page_input_second })
            ).slice(0, 40);
            return [...case_2_first, ...case_2_second];
        case 3:
            const case_3_first = (
                await fifthPerPage({ search_word, page: page_input_first })
            ).slice(40, 60);
            const case_3_second = (
                await fifthPerPage({ search_word, page: page_input_second })
            ).slice(0, 30);
            return [...case_3_first, ...case_3_second];
        case 4:
            const case_4_first = (
                await fifthPerPage({ search_word, page: page_input_first })
            ).slice(30, 60);
            const case_4_second = (
                await fifthPerPage({ search_word, page: page_input_second })
            ).slice(0, 20);
            return [...case_4_first, ...case_4_second];
        case 5:
            const case_5_first = (
                await fifthPerPage({ search_word, page: page_input_first })
            ).slice(20, 60);
            const case_5_second = (
                await fifthPerPage({ search_word, page: page_input_second })
            ).slice(0, 10);
            return [...case_5_first, ...case_5_second];
    }
};

const fifthPerPage = async ({ search_word, page }: ProductListRequest) => {
    /** 해당 페이지 물품 받아오기 : 각 페이지 당 60개 씩 있음 */
    const query_string = queryString(search_word, page);
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: query_string,
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    const content = parser.list.map(res => responseMapping(res));

    return content;
};

export const queryString = (q: string, page: string): SiteRequest => ({
    q,
    stat_uid: '10649087',
    version: '4',
    page,
});
