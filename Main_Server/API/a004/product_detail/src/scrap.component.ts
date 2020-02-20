import { requestService } from './request.service';
import { SiteResponse } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common';
import { ImageSite } from '../../option';

export const scrapComponent = async (id: string) => {
    const result = await requestService(id);
    return mapping(result);
};

const mapping = (input: SiteResponse): ProductDetailResponse => ({
    id: input.id.toString(),
    /** 사이트 식별용 코드 */
    site_code: '004',
    /** 해당 상품의 실제 사이트로 이동하는 url */
    origin_url: 'https://www.withsellit.com' + input.url,
    /** 제목 */
    title: input.product_name_for_web,
    /** 가격 */
    price: input.prices?.marked_selling_price ?? -1,
    /** 날짜
     * 존재하지 않는 사이트 ex) 당근마켓
     */
    date: '',
    /** 이미지 링크 배열 */
    image: [ImageSite + input.preview_image.image_id],
    /** 상품 상세 내용 */
    detail: input.ks_message,
    /**
     * optional 정보
     * + 배송 방식 정보
     * + 판매 장소
     */
    tags: {
        // TODO : 전체적으로 수정 요망
        isDetailHtml: false,
        /** 상품 상태: 'A', 'B', 'C */
        // TODO : 수정요망
        상품상태: 'A',
    },
});
