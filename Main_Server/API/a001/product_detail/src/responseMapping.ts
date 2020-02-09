import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common/action';
import * as moment from 'moment';

/** 형식에 맞게 날짜 나오게 해주기 : 1/19/2020 -> 2020-1-19 */
function makeDate(d: string) {
    return moment(d, 'MM/DD/YYYY')
        .format('YYYY-MM-DD')
        .toString();
}

export const responseMappingDetail = (
    input: SiteResponseDetail,
    pid: string,
): ProductDetailResponse => ({
    id: pid,
    site_code: '001',
    origin_url: `https://api.bunjang.co.kr/api/1/product/${pid}/detail_info.json`,
    title: input.item_info.name,
    price: parseInt(input.item_info.price, 10) || -1,
    date: makeDate(new Date(input.item_info.update_time * 1000).toLocaleDateString()),
    image: [input.item_info.product_image],
    detail: input.item_info.description,
    tags: {
        delivery: input.item_info.free_shipping ? '무료배송' : '배송비별도',
        location: input.item_info.location,
    },
});
