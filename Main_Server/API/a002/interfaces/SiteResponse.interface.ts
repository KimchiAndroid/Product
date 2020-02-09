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

export interface SiteListResponse{
  consignmentType: number;
  mainLocationName: string;
  locationNames: string[];
  url: string;
  platformType: number;
  productHiddenStatus: number;
  /** 상품가격 */
  price: number;
  /** 상품번호 */
  seq: number;
  state: number;
  /** 물품제목 */
  title: string;
  subTitle: string;
  /** 게시날짜 */
  sortDate: string;
  /** 가게id */
  storeSeq: number;
  /** 작성자 사진 */
  storeProfileUrl: string;
  /** 작성자 이름 */
  storeNickname: string;
  /** 유저 번호 */
  userSeq: number;
  videoUrl: string;
  certifiedDealer: number;
  distance: number;
  company: string;
  viewCount: number;
  /** 검색날짜 */
  searchStartDate: string;
  userName: string;
  ad: number;
  adImpUrl: null
  adClickUrl: null
  adType: null
  articleUrl: null
  menuId: null
  articleSeq: null
  articleRegDate: null
  articleBadgeShow: number;
  productType: string;
  isConsignment: number;
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