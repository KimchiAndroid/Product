import { SiteResponseList, SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductListResponse, ProductDetailResponse } from '../../Common/action';
//import { SiteCode } from '../../Common/site_code'

export const responseMapping = (input: SiteResponseList): ProductListResponse => ({
    //id: 1,
    site_code: '001',
    title: input.name,
    price: parseInt(input.price, 10) || -1,
    thumbnail: input.product_image,
});

export const responseMappingDetail = (
    input: SiteResponseDetail,
    pid: string,
): ProductDetailResponse => ({
    site_code: '001',
    origin_url: `https://api.bunjang.co.kr/api/1/product/${pid}/detail_info.json`,
    title: input.item_info.name,
    price: parseInt(input.item_info.price, 10) || -1,
    date: new Date(input.item_info.update_time * 1000).toLocaleDateString(),
    image: [input.item_info.product_image],
    detail: input.item_info.description,
    tags: {
        delivery: input.item_info.free_shipping ? '무료배송' : '배송비별도',
        location: input.item_info.location,
    },
});
