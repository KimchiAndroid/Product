import { SiteResponse, SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { requestService } from './request.service';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyword: string, page: number) => {
    const rest = page % 3;
    if (rest === 1) {
        const start = 1 + 5 * Math.floor(page / 3);
        const page_1 = await makeList(keyword, start); //30개짜리 리스트
        const page_2 = await (await makeList(keyword, start + 1)).slice(0, 20); //20개로 자른 리스트
        return [...page_1, ...page_2];
    } else if (rest === 2) {
        const start = 2 + 5 * Math.floor(page / 3);
        const page_1 = await (await makeList(keyword, start)).slice(20); //10개짜리 리스트
        const page_2 = await await makeList(keyword, start + 1); //30개짜리 리스트
        const page_3 = await (await makeList(keyword, start + 2)).slice(0, 10); //0~10번째 인덱스까지 자른 리스트
        return [...page_1, ...page_2, ...page_3];
    } else if (rest === 0) {
        const start = -1 + 5 * Math.floor(page / 3);
        const page_1 = await (await makeList(keyword, start)).slice(10); //20개
        const page_2 = await await makeList(keyword, start + 1); //30개
        return [...page_1, ...page_2];
    }
};

const makeList = async (keyword: string, page: number) => {
    const res = await requestService(keyword, page);
    const product_list: SiteResponse = JSON.parse(res);
    const product_detail_list: SiteResponseDetail[] = product_list.list;
    const mapping_to_form = product_detail_list.map(responseMapping);

    return mapping_to_form;
};
