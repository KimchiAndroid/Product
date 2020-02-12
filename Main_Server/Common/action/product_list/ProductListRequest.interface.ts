import { SiteCode } from '../../site_code';

export interface ProductListRequest {
    /** 검색 단어 */
    search_word: string;
    /** 사이트 코드 */
    site_code?: SiteCode;
    /** 페이지 수 ex) page 1일 경우 50개, page 2일 경우 다음 50개 */
    page: string;
}
