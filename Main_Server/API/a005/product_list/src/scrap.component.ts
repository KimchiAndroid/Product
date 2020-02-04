import { SiteResponse, SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { requestService } from './request.service';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyWord: string) => {
    const res = await requestService(keyWord, 1);
    const product_list: SiteResponse = JSON.parse(res);
    const product_detail_list: SiteResponseDetail[] = product_list.list;
    const mapping_to_form = product_detail_list.map(responseMapping);
    return mapping_to_form;
};
