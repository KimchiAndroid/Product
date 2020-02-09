import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const query_string = queryString(search_word, page);
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: query_string,
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    /** ad false 인 부분 거르기 */
    const content = parser.list
        .filter(content_ad_filter => content_ad_filter.ad === false)
        .map(res => responseMapping(res));
    //const content = parser.list.map(res => responseMapping(res));
    return content;
};

export const queryString = (q: string, page: string): SiteRequest => ({
    q,
    stat_uid: '10649087',
    version: '4',
    page,
});
