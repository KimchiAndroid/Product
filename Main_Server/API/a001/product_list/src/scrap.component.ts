import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const query_string = queryString(search_word, page);
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: {
            query_string,
        },
        // qs: {
        //     keyWord,
        //     stat_uid: '10649087',
        //     version: '4',
        //     page: 5,
        // },
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    const content = parser.list.map(res => responseMapping(res));
    return content;
};

export const queryString = (keyWord: string, page: string): SiteRequest => ({
    keyWord,
    stat_uid: '10649087',
    version: '4',
    page,
});
