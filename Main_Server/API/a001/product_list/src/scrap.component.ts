import * as request from 'request-promise';
import { parserFrame } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyWord: string) => {
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: {
            keyWord,
            stat_uid: '10649087',
            version: '4',
            /** page는 일단 임의로 1이라고 지정해 두기. 나중에 바꾸면 된다. */
            page: 5,
        },
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    const content = parser.list.map(res => responseMapping(res));
    return content;
};
