export interface SiteRequest {
  /** OpenAPI 가입 시 발급받는 32자리 문자 Key */
  key: string;
  /** OpenAPI 서비스 코드 → 상품검색 : ProductSearch */
  apiCode: string;
  /** 검색 요청 값 */
  keyword: string;
}

export interface SiteListRequest {
  filter: {};
  isSearchSaved: number;
  searchQuantity: number;
  searchWord: string;
  sort: {};
  startIndex: number;
}