import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyWord: string) => {
    const query_string = queryString(keyWord);
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

export const queryString = (keyWord: string): SiteRequest => ({
    keyWord,
    stat_uid: '10649087',
    version: '4',
    page: 5,
});
