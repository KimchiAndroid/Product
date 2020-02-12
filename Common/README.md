## 현재 버전

-   version : 1.3.1
-   author: IMRaccoon

<br>

## 현재 존재하는 Interface & Type

-   Product Detail
    -   Request
    -   Response
-   Product List
    -   Request
    -   Response
-   Check Link
    -   Response

<br>

## 변동사항

-   v.1.1.x
    -   Product List Response, Product Detail Response 프론트 요구사항 반영
    -   Site Code 추가: 11번가 테스트 전용
    -   Check Linke Response 추가
    -   id 값 String 타입으로 변경
-   v.1.2
    -   0: Product Detail Request site_code 필드 추가
    -   1: Product List Request page 필드 추가
    -   2: Product Detail Request site_code optional 수정
-   v.1.3
    -   0: Product Detail Response & Product List Response 수정
        -   사이트별 특징 추가 반영(교환, 환불, 상품상태, HTML 유무)
        -   Front 팀 의견 반영
        -   tag 의무화 -> 전부 없을 경우 `tag: {}` 로 지정
        -   Product List 조회 시, 구매 가능 여부 추가
    -   1: Category 제거
