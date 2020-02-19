import { ProductListRequest, ProductListResponse } from '../../Common';
import { requestService } from './request.service';
import { SiteResponse } from '../../interfaces/SiteResponse.interface';
import { ImageSite } from '../../option';

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const response = await requestService(search_word, parseInt(page, 10));
    return response.map(mapping);
};

const mapping = (input: SiteResponse): ProductListResponse => ({
    id: input.id.toString(),
    site_code: '004',
    title: input.product_name_for_web,
    /** 가격 */
    price: input.prices.marked_selling_price,
    /** 구매 가능 여부 */
    isSelling: input.buyable,
    /** 이미지 링크 (option) */
    thumbnail: ImageSite + input.preview_image.image_id + '.jpg',
});
