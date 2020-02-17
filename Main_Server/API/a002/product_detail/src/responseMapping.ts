import { SiteDetailResponse } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common/action';

export const responseMapping = (input: SiteDetailResponse, url: string[] ): ProductDetailResponse => ({
    id: String(input.productSeq),
    site_code: '002',
    origin_url: 'https://m.joongna.com/product-detail/' +  String(input.productSeq),
    title: input.productTitle,
    price: input.productPrice,
    date: input.sortDate,
    image: url,
    detail: input.productDescription,
    tags: {
        delivery: input.tags.indexOf('무료배송') > 0  ? '무료배송' : '배송비별도', 
        location: input.locations[0] == undefined  ? '장소없음' : input.locations[0].locationName,
    },
});
