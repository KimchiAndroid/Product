import * as request from 'request-promise';
import { parserFrame, SiteRequest } from '../../interfaces/SiteRequest.interface';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';

/**
 * 해당 페이지 물품 받아오기 : 각 페이지 당 60개 씩 있음
 * 번개장터는 page 0 부터 시작.
 */
export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    if (page == '') {
        /** search_word 에 해당하는 모든 상품 뽑기 */
        const query_string = queryString(search_word, '0', 1000);
        const list_headers = {
            url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
            qs: query_string,
        };
        const response = await request.get(list_headers);
        const parser: parserFrame = JSON.parse(response);

        /** 상품 총 개수 알아보기 */
        const total_item_num = parser.num_found;
        /** 총 몇 번 파싱해야하는 지 */
        var parsing_num = Math.ceil(total_item_num / 1000);
        /** 첫번째 1000개 요소 배열 */
        var result = parser.list.map(res => responseMapping(res));

        /** 한 번에 1000개씩 접근해서 상품 총 개수만큼 한 배열에 뽑기 */
        var input_page = '2';
        while (parsing_num > 1) {
            result.push(...(await itemList({ search_word, page: input_page }, 1000)));

            /** page 늘리기 */
            const page_plus_1 = parseInt(input_page, 10) + 1;
            input_page = page_plus_1.toString();
            /** 한 번 돌 때마다 파싱 넘버 줄이기 */
            parsing_num--;
        }
        return result;
    } else {
        /** page 입력 했을 때, 해당 페이지의 60개 item */
        const result = await itemList({ search_word, page }, 60);
        return result;
    }
};

const itemList = async ({ search_word, page }: ProductListRequest, index: number) => {
    const page_minus_1 = parseInt(page, 10) - 1;
    const input_page = page_minus_1.toString();

    const query_string = queryString(search_word, input_page, index);
    const list_headers = {
        url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
        qs: query_string,
    };
    const response = await request.get(list_headers);
    const parser: parserFrame = JSON.parse(response);
    const content = parser.list.map(res => responseMapping(res));
    return content;
};

export const queryString = (q: string, page: string, n: number): SiteRequest => ({
    q,
    stat_uid: '10649087',
    version: '4',
    page,
    n,
});
