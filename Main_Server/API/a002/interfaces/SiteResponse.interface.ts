export interface SiteResponse {
  ProductSearchResponse: {
    Request?: [
      {
        /** 매개 변수 */
        Arguments: [
          {
            Argument?: Array<{
              $: { name: string; value: string };
            }>;
          },
        ];
        /** 걸린 시간 */
        ProcessingTime?: [string];
      },
    ];
    Products?: [
      {
        /** 검색된 총 개수 */
        TotalCount?: [string];
        Product?: SiteResponseDetail[];
      },
    ];
  };
}

export interface SiteResponseDetail {
  /** 상품코드 */
  ProductCode?: [string];
  /** 상품명 */
  ProductName?: [string];
  /** 상품 가격 */
  ProductPrice?: [string];
  /** 상품 이미지 */
  ProductImage?: [string];
  /** 판매자 닉네임 */
  SellerNick?: [string];
  /** 상품 상세 정보 URL */
  DetailPageUrl?: [string];
}

export interface SiteResponseDetailOne {
  /** 상품코드 */
  ProductCode?: string;
  /** 상품명 */
  ProductName?: string;
  /** 상품 가격 */
  ProductPrice?: string;
  /** 상품 이미지 */
  ProductImage?: string;
  /** 판매자 닉네임 */
  SellerNick?: string;
  /** 상품 상세 정보 URL */
  DetailPageUrl?: string;
}