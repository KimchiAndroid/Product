export interface DetailResponse {
    status: number;
    message: string;
    data: {
        title: string;
        description: string;
        categories: [
            {
                categoryId: string;
                name: string;
            },
            {
                categoryId: string;
                name: string;
            },
        ];
        images: [
            {
                imageUrl: string;
            },
        ];
        tags: string[];
        helpers: [];
        authority: {
            canChat: boolean;
            canPayment: boolean;
            canParcel: boolean;
            canUpdate: boolean;
        };
        property: {
            price: {
                amount: number;
                text: string;
            };
            usedType: {
                code: string;
                name: string;
            };
            sellMethod: {
                code: string;
                name: string;
            };
            sellState: {
                code: string;
                name: string;
                isDeal: boolean;
            };
            location: {
                address: string;
                latitude: number;
                longitude: number;
            };
            hasDeliveryFee: boolean;
            type: string;
            isBarter: boolean;
            isEscrowOnly: boolean;
            isDirectDeal: boolean;
            showWatermark: boolean;
        };
        count: {
            comment: number;
            wish: number;
            visit: number;
        };
        activity: {
            isWish: boolean;
        };
        share: {
            linkUrl: string;
        };
        member: {
            identity: {
                nick: string;
                domain: string;
            };
            profile: {
                level: number;
                imageUrl: string;
            };
            propensity: {
                level: number;
            };
            count: {
                item: number;
                rating: number;
                opinion: number;
                buy: number;
                sell: number;
                review: {
                    post: number;
                    good: number;
                    bad: number;
                };
            };
            level: {
                imageUrl: 'http://ccimage.hellomarket.com/api/2019/member/img_level_20190422_1.png';
            };
            reputation: {
                score: 0;
            };
            type: 'norm';
            linkUrl: 'hellomarket://hellomarket.api/member/4782581';
            isBiz: true;
        };
        dragup: {
            isScheduled: false;
        };
        linkUrl: 'hellomarket://hellomarket.api/item/165485117';
        timeago: '2분전';
        timestamp: 1580374722776;
    };
    extra: {
        escrowHelpImageUrl: 'http://appapi.hellomarket.com/assets/latest/images/safepay/safepay-banner-bottom.png';
        flags: [
            {
                id: '30';
                name: '헬로페이 거부';
            },
            {
                id: '21';
                name: '주류, 담배';
            },
            {
                id: '22';
                name: '전문 의약품, 의료기기';
            },
            {
                id: '23';
                name: '개인정보 거래(신분증, 대포폰 등)';
            },
            {
                id: '24';
                name: '음란물/성인용품(중고속옷 포함)';
            },
            {
                id: '25';
                name: '위조상품';
            },
            {
                id: '26';
                name: '총포 도검류';
            },
            {
                id: '27';
                name: '화장품 견본품';
            },
            {
                id: '28';
                name: '게임계정';
            },
            {
                id: '29';
                name: '전문판매 아이템 의심';
            },
        ];
    };
    loginPopupStatus: true;
    visitCountPlus: 8;
    appDownloadStatus: false;
    relationList: [
        {
            idx: 165467375;
            title: '아이폰7 제트블랙 128기가 A급 판매합니다.';
            price: 200000;
            priceText: '200,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/29/12/0734_4321496_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165477947;
            title: '아이폰7레드 128기가 ※A급※ 급처판매';
            price: 180000;
            priceText: '180,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/30/04/3316_4816919_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165430429;
            title: '아이폰7플러스 128기가 제트블랙 A급/ (#1491)';
            price: 265000;
            priceText: '265,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/24/18/2641_3300713_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165428944;
            title: '아이폰7플러스 블랙 128기가 판매';
            price: 280000;
            priceText: '280,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/24/15/1658_4799458_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165472585;
            title: '아이폰7  128기가 블랙';
            price: 270000;
            priceText: '270,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/29/18/3628_3590962_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165483871;
            title: '아이폰7+플러스 A급 128기가 골드 판매합니다';
            price: 270000;
            priceText: '270,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/30/16/3744_3881920_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165459538;
            title: '아이폰7플러스 128기가 블랙(급처)';
            price: 250000;
            priceText: '250,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/29/14/3735_2486842_1.jpg?size=s4';
            isMembership: false;
        },
        {
            idx: 165447976;
            title: '부산_아이폰7 128기가 실버 단품 a-급';
            price: 210000;
            priceText: '210,000원';
            sellMethod: '01';
            sellMethodNm: '판매';
            imageUrl: 'http://ccimg.hellomarket.com/images/2020/item/01/27/16/0317_4395466_1.jpg?size=s4';
            isMembership: false;
        },
    ];
}
