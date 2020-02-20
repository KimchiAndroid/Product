import * as rp from 'request-promise';
import { SiteResponse } from '../../interfaces/SiteResponse.interface';
import { APISite } from '../../option';

export const requestService = async (id: string) => {
    const tmpAPISite = APISite + '?' + 'ids[]=' + id + '&' + 'web=true';
    const response: { orders: SiteResponse[] } = JSON.parse(await rp(tmpAPISite));
    return response.orders[0];
};
