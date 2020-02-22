import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common/action';

const makeMonth = (month: string) => {
    const month_num = parseInt(month, 10);
    return month_num < 10 ? '0' + month : month;
};

function makeDate(newDate: number) {
    const getDate = new Date(newDate);
    const year = getDate.getFullYear().toString();
    const month = makeMonth((getDate.getMonth() + 1).toString());
    const date = getDate.getDate().toString();

    const result = year + '-' + month + '-' + date;
    return result;
}

export const responseMappingDetail = (
    input: SiteResponseDetail,
    pid: string,
): ProductDetailResponse => ({
    id: pid,
    site_code: '001',
    origin_url: `https://m.bunjang.co.kr/products/${pid}`,
    title: input.item_info.name,
    price: parseInt(input.item_info.price, 10) || -1,
    date: makeDate(input.item_info.update_time * 1000),
    image: [input.item_info.product_image],
    detail: input.item_info.description,
    tags: {
        배송비: input.item_info.free_shipping == true ? '무료' : '별도',
        location: input.item_info.location,
        isDetailHtml: false,
        교환: input.item_info.is_free_sharing == true ? '가능' : '불가능',
        /** 새상품 : A, 중고 : C */
        상품상태: input.item_info.bizseller == true ? 'A' : 'C',
    },
});
