import * as rp from 'request-promise';
import { SearchSite, APISite } from '../../option';
import { SiteResponse } from '../../interfaces/SiteResponse.interface';

export const requestService = async (query: string, page?: number) => {
    const ids: string[] = [];
    if (!!page) {
        await rp.get(SearchSite, { qs: { query } }, (err, res, body: string) => {
            ids.push(
                ...body
                    .slice(
                        body.indexOf('more_order_ids') + 17,
                        body.indexOf(',"scates":[],"sortings":[{') - 1,
                    )
                    .split(',')
                    .slice((page - 1) * 60, page * 60),
            );
        });
    } else {
        await rp.get(SearchSite, { qs: { query } }, (err, res, body: string) => {
            ids.push(
                ...body
                    .slice(
                        body.indexOf('more_order_ids') + 17,
                        body.indexOf(',"scates":[],"sortings":[{') - 1,
                    )
                    .split(','),
            );
        });
    }
    // web 잇음 없음이 다름
    const tmpAPISite =
        APISite + '?' + ids.reduce((acc, cur) => acc + 'ids[]=' + cur + '&', '') + 'web=true';
    const response: { orders: SiteResponse[] } = JSON.parse(await rp(tmpAPISite));
    return response.orders;
};
