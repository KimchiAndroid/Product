import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';

/**
 * 해당 페이지 물품 받아오기 : 각 페이지 당 60개 씩 있음
 * 번개장터는 page 0 부터 시작.
 */
export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const page_minus_1 = parseInt(page, 10) - 1;
    const input_page = page_minus_1.toString();

    const query_string = queryString(search_word, input_page);
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
