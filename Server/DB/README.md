# DB 상 예정 Interface

# DB 상의 상품 List 저장 Interface

    /** 상품 식별용 Unique 값 */
    id: string;
    /** 사이트 식별용 코드 */
    site_code: SiteCode;
    /** 제목 */
    title: string;
    /** 가격 */
    price: number;
    /** 이미지 링크 (option) */
    thumbnail?: string;
    /** 판매 중/판매완료 체크 */
    isSelling: boolean;

}
}

# Site에서 요청할 상품 정보 Interface

    /** 상품 식별용 Unique 값 */
    id: string;
    /** 사이트 식별용 코드 */
    site_code: SiteCode;
    /** 해당 상품의 실제 사이트로 이동하는 url */
    origin_url: string;
    /** 제목 */
    title: string;
    /** 가격 */
    price: number;
    /** 날짜
     * 존재하지 않는 사이트 ex) 당근마켓
     */
    date?: string;
    /** 이미지 링크 배열 */
    image?: string[];
    /** 상품 상세 내용 */
    detail: string;
    /**
     * optional 정보
     * + 배송 방식 정보
     * + 판매 장소
     */
    tags?: ProductDetailTags;

# DB상 필요한 Query

1. 키워드 검색 시 Database 조회, 반환 (개수 문제는 나중에 해결 **빠른 해결 바람**)
2. 키워드 검색 후 Database에 정보가 없을 시 Api 호출 후 Api 데이터 삽입, ~~api호출 시 Database에 이미 있는 정보는 자동으로 업데이트(id, site_code - primary Key 확인)~~
3. 일정 주기로 키워드 Api 호출을 통한 Database 업데이트, 키워드는 카테고리 약 50개가 될 것, 이때도 이미 있는 정보들은 자동으로 업데이트
4. **현재, 모든 키워드를 'keyword라는 테이블로 관리하고 있음, 이 키워드를 중심으로 업데이트 운영할 예정**

변경사항
2020.02.11 : Database Ver 1.0.0 Update
database name: products, column isSelling 추가
