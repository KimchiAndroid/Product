export interface SiteResponse {
    status: number;
    message: string;
    result: {
        startTime: number;
        page: number; //페이지넘버
        limit: number; //한 페이지당 최대 데이터 개수
        totalCount: number; //모든 페이지 총 데이터 개수
        sido: null;
        gugun: null;
        memberIdx: number;
        category: null;
        sellMethod: null;
        usedType: null;
        canBarter: null;
        hasDeliveryFee: null;
        dong: null;
        escrowSeller: null;
        escrowOnly: null;
        minPrice: number;
        maxPrice: number;
        type: null;
        sort: string;
        latitude: number;
        longitude: number;
        radius: number;
        abandonmentSex: null;
        requireSideways: boolean;
        correctTotalCount: number;
        correctQuery: null;
        q: string; //쿼리스트링 중 검색어 ex.아이폰
        doTyping: boolean;
        doCorrect: boolean;
    };
    data: {
        advances: [];
        hasKeyword: boolean;
        hasBiz: boolean;
        advance: null;
    };
    sideways: {
        category: [
            {
                name: string;
                count: number;
                id: string;
                list: {
                    id: string;
                    name: string;
                    count: number;
                };
            },
        ];
    };
    count: number; //페이지당 데이터 개수
    list: SiteResponseDetail[]; //한 페이지에 올라와있는 데이터 리스트
}

export interface SiteResponseDetail {
    type: string;
    item: {
        itemIdx: 0;
        type: string;
        categoryId: string;//카테고리id ex)아이폰 검색=> 휴대폰테블릿(HAK0000) => 애플(HAK0012)
        title: string;
        media: {
            imageUrl: string;
            videoUrl: string;
        };
        property: {
            //가격
            price: {
                amount: number; //실제 가격을 숫자로 ex.100
                text: string; //실제 가격을 스트링으로 ex."100원"
            };
            //판매상태
            sellState: {
                code: string; //"ForSale"
                name: string; //"판매중"
            };
            //제품상태
            usedType: {
                code: string; //"Secondhand", "AsNew", "NotUsed"
                name: string; //"중고", "거의새것", "새상품"
            };
            location?: {
                address: string;
                latitude: number;
                longitude: number;
            };
            isEscrowOnly: boolean;
            hasDeliveryFee: boolean; //배송비 포함여부, 배송비포함=true, 미포함=false
            isBarter: boolean;
        };
        count: {
            comment: number; //댓글 개수
            wish: number; //찜하기 개수
        };
        escrow: {
            isEscrow: boolean;
        };
        dragup: {
            isScheduled: boolean;
        };
        linkUrl: string;
        timeago: string;
    };
}
