export interface SiteResponse {
    /** id */
    id: number;
    /** titlew */
    product_name_for_web: string;
    /** product id */
    product_id: number;
    /** https://www.withsellit.com 뒤에 붙이면 바로 detail */
    url: string;
    ks_message: string;
    prices: {
        // 원래 올린 가격
        original_price: null | number;
        // 실제 판매가격
        full_selling_price: number;
        // 실제 판매가격
        marked_selling_price: number;
        // 할인율
        discount_rate: number;
        // 기본 할인율
        initial_discount_rate: number;
    };
    // 판매상태
    selling_state: string;
    // 구매 가능여부
    buyable: boolean;
    // 판매된 날짜
    sold_at: null;
    // 미리보기 사진
    preview_image: {
        image_id: 'cet9fjakm6cxshectyhb';
    };
    // 상태
    translated_state: '중고' | '새상품';
    seller_info: {
        // 판매자 닉네임
        nickname: string;
        // 판매자 인증 여부
        verified: boolean;
    };
}
