export interface SiteListResponse {
    menuName: null;
    seq: number;
    userSeq: number;
    title: string;
    platformType: number;
    productSectionType: number;
    state: number;
    url: string;
    videoUrl: string;
    mediatype: number;
    price: number;
    locations: [];
    locationNames: [];
    mainLocationName: string;
    sortDate: string;
    prodCondition: number;
    isParcelFee: number;
    fullPackageYn: number;
    limitedEditionYn: number;
    flawedYn: number;
    consignmentType: number;
    isConsignment: number;
    cgSeq: string;
    cgName: string;
    viewCount: number;
    reportYn: number;
    transferYn: number;
    productHiddenStatus: number;
    tags: string;
    copyHideYn: number;
    totalCnt: number;
    storeProfileUrl: string;
    storeNickname: string;
    certifiedDealer: number;
    distance: number;
    company: string;
    articleUrl: null;
    articleSeq: null;
    articleBadgeShow: number;
    userName: string;
    ad: number;
    adImpUrl: string;
    adClickUrl: string;
    adType: string;
    productType: string;
}

export interface SiteDetailResponse {
    storeSeq: number;
    nickName: string;
    productSeq: number;
    productTitle: string;
    productDescription: string;
    qty: number;
    media: [
        [
            {
                productMediaSeq: number;
                mediaUrl: string;
                thumbnailUrl: string;
                waterMarkUrl: string;
                mediaType: number;
                watermarkYn: number;
                mediaSort: number;
                mediaStatus: number;
                mainYn: number;
            },
        ],
    ]; //
    productStatus: number;
    productHiddenStatus: number;
    keywords: string[]; //
    productCategory: number;
    categoryName: string;
    categorySeq: string;
    condition: { productCondition: number; options: [Object] };
    productPrice: number;
    parcelFeeYn: number;
    productColor: string;
    platformType: number;
    productTradeType: number;
    consignmentType: number;
    productSectionType: number;
    consignmentYn: number;
    locations: [
        {
            locationType: number;
            locationCode: string;
            dongCode: string;
            locationName: string;
            lon: number;
            lat: number;
            userCount: number;
        },
    ];
    payment: {
        cardYn: number;
        bankTransferYn: number;
        depositlessYn: number;
        userAccountSeq: number;
        accountDetail: null;
    };
    partnercenterPaymentUrl: null;
    sortDate: string;
    productType: string;
    wish: { wishYn: number; wishCount: number };
    store: {
        nickName: string;
        profileImageUrl: string;
        levelImgUrl: string;
        levelImageUrl: string;
        levelName: string;
        level: number;
        productCount: number;
        satisFactionScore: number;
        followingYn: number;
        productList: [];
    };
    viewCount: number;
    tags: string;
    paymentUrl: string;
    productDescriptionMedia: [];
    followerCount: number;
    partnerPickModifyUrl: string;
    sso: number;
    existDeliveryLocationsOfCurrentLoginedUser: boolean;
    isConsignment: number;
    partnercenterConsignment: number;
    askDefaultAddress: boolean;
}

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
                //Product?: SiteResponseDetail[];
            },
        ];
    };
}
