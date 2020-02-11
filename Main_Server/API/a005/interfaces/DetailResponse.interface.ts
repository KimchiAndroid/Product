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
                imageUrl: string;
            };
            reputation: {
                score: number;
            };
            type: string;
            linkUrl: string;
            isBiz: boolean;
        };
        dragup: {
            isScheduled: boolean;
        };
        linkUrl: string;
        timeago: string;
        timestamp: number;
    };
    extra: {
        escrowHelpImageUrl: string;
        flags: [
            {
                id: string;
                name: string;
            }[],
        ];
    };
    loginPopupStatus: boolean;
    visitCountPlus: number;
    appDownloadStatus: boolean;
    relationList: [
        {
            idx: number;
            title: string;
            price: number;
            priceText: string;
            sellMethod: string;
            sellMethodNm: string;
            imageUrl: string;
            isMembership: boolean;
        },
        [],
    ];
}
