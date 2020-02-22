import { SiteDetailResponse } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common/action';

export const responseMapping = (
    input: SiteDetailResponse,
    url: string[],
): ProductDetailResponse => ({
    id: String(input.productSeq),
    site_code: '002',
    origin_url: 'https://m.joongna.com/product-detail/' + String(input.productSeq),
    title: input.productTitle,
    price: input.productPrice,
    date: input.sortDate,
    image: url,
    detail: input.productDescription,
    tags: {
        배송비: input.tags.indexOf('무료배송') > 0 ? '무료' : '별도',
        location: input.locations[0] == undefined ? '장소없음' : input.locations[0].locationName,
        isDetailHtml: false,
        상품상태: cdn(input.condition.productCondition),
    },
});

function cdn(condition: number) {
    switch (condition) {
        case 0: {
            return 'A';
            break;
        }
        case 1: {
            return 'B';
            break;
        }
        case 2: {
            return 'C';
            break;
        }
    }
}
