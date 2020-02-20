export interface ProductDetailTags {
    /** 배송 방식 정보 */
    배송비?: '무료' | '별도';
    /** 판매 장소 */
    location?: string;
    /** detail의 타입
     * + HTML일 경우 True
     * + string일 경우 False
     */
    isDetailHtml?: boolean;
    /** 교환 여부 */
    교환?: '가능' | '불가능';
    /** 환불 여부 */
    환불?: '가능' | '불가능';
    /** 상품 상태: 'A', 'B', 'C */
    상품상태?: 'A' | 'B' | 'C';
}
