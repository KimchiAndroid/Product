import { SiteResponse, SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { requestService } from './request.service';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyword: string, page: number) => {
    const new_page = page * 2;
    return [...(await makeList(keyword, new_page - 1)), ...(await makeList(keyword, new_page))];
};

const makeList = async (keyword: string, page: number) => {
    const res = await requestService(keyword, page);
    const product_list: SiteResponse = JSON.parse(res);
    const product_detail_list: SiteResponseDetail[] = product_list.list.filter(input => input.item);
    const mapping_to_form = product_detail_list.map(responseMapping);

    return mapping_to_form;
};
