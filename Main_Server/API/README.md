-   fork한 영역에서 본인 branch를 생성하여 작업하세요
    // 참고 : https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/
-   backend 폴더 하위에 본인의 이름으로 된 폴더를 만들고 그 안에서 작업합니다.

---

## 기본 개발 방법

-   담당하는 사이트의 이름을 따서 폴더를 생성합니다.
-   기본적으로 폴더 안에는 세 개의 json 파일이 필요합니다..
    -   tsconfig.json : 컴파일 옵션 관련된 파일로 a000 폴더와 동일하게 만들어주면 됩니다.
    -   package.json : 패키지 및 버전 관리를 위한 파일로 package.example.json 파일을 이름을 바꿔 복사 붙여넣기 해주면 됩니다.
    -   이 때, "author"은 본인의 깃헙 닉네임, "name"은 폴더 이름과 동일하게 해주면 됩니다.
    -   jest.json: 테스트를 하기 위한 모듈의 옵션에 대한 파일로 jest.example.json 파일을 이름을 바꿔 복사 붙여넣기 해주면 됩니다.
-   이 후, 필요한 모듈들은 자체적으로 install 하여 사용하시면 됩니다.
    -   맨 처음에 바로 `npm install 해주어야 모듈들이 새로 설치가 됩니다.`
    -   이 때, 주의해야할 점은 npm install 시에 모듈 이름이 **@types** 로 또는 **ts-** 로시작할 시에, -D 옵션을 붙여주어야 합니다.
    -   ex) `npm install request`, `npm install -D @types/request`
-   Common 폴더의 경우 현재는 폴더 전체를 복사하여 본인의 개발 폴더(`a000`)에 붙여넣고 사용합니다.
-   각 기능 별로 폴더 이름을 만들고 개발합니다.

<br>

## 개발해야 하는 기능

#### 현재 필요로 하는 기능들입니다.

-   check_connection: 사이트에 호출을 하였을 때에, 응답을 제대로 하는 지 확인하는 기능
    -   input : X
    -   output : `CheckLinkResponse`
-   product_list: 사이트에 게시할 상품들에 대한 간단한 정보들을 가져옵니다.
    -   input : `ProductListRequest`
    -   output : `ProductListResponse`
-   product_detail: 사이트에서 `id` 값을 받아 해당 상품을 상세하게 조회합니다.
    -   input : `ProductDetailRequest`
    -   output : `ProductDetailResponse`

> 필요한 기능들에 대해 유동적으로 늘릴 생각입니다.

<br>

## 개발 사이트

-   A000: 11번가(예시, 사용금지)
-   A001: 번개장터
-   A002: 중고나라
-   A003 : 당근마켓
-   A004: 셀잇
-   A005: 헬로마켓

> 이 후, 개발 예정인 사이트들은 계속 이름에 맞춰 추가될 예정입니다.

<br>

## 개발 단계

-   기본적인 구조는 `a000`을 지침으로 개발하시면 됩니다.
-   현재 필요로 하는 기능에 대한 폴더가 있어야 하며 해당 기능별 폴더에는 무조건 있어야 하는 것이 있습니다.
    1. `src` 폴더: 대부분의 소스 코드가 들어가는 곳입니다.
    2. `index.ts` 파일: 서버에서 부르는 파일로 입력 값에 따라 Promise<결과 값> 이 나오도록 개발하시면 됩니다.
    3. `기능명.e2e.ts` 파일: 실제 테스트용 파일로 해당 파일은 전혀 문제 되지 않기 때문에 결과값 확인용으로 사용합니다.
    4. `test` 폴더: API 팀에서는 절대 오류가 나지 않는다는 전제하에 개발됩니다. 이로 인해 함수별 테스트는 의무적으로 시행합니다.
-   사이트 별 interface는 본인이 개발하는 사이트의 폴더에 `interfaces`라는 이름의 폴더를 생성해 사용합니다.
-   파일 실행을 직접 해보는 방법은 다음과 같습니다.
    -   콘솔의 위치를 본인의 개발 사이트로 위치합니다. ex) /Product/API/a000 : ~~
    -   다음의 명령어를 사용합니다. `npm run 기능폴더명/index.ts`
    -   ex) `npm run product_list/index.ts`
