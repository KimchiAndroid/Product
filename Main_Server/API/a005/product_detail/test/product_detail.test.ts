import { detailResponseMapping, comp, sellState, setDate } from '../src/detailResponseMapping';
import { DetailResponse } from '../../interfaces/DetailResponse.interface';

describe('product_detail Test', () => {
    it('comp Test', () => {
        const result = comp(8);
        expect(result).toStrictEqual('08');
    });

    it('sellState Test', () => {
        const state = sellState('AsNew');
        expect(state).toStrictEqual('B');
    });

    it('setDate Test', () => {
        const date = setDate('02. 11.');
        expect(date).toStrictEqual('2020-02-11');
    });

    it('detailResponseMapping Test', () => {
        const output = detailResponseMapping(input);
        expect(output).toStrictEqual({
            id: '165559454',
            site_code: '005',
            origin_url: 'https://www.hellomarket.com/item/165559454',
            title: '아이폰 7 구성품 팝니다',
            price: 40000,
            date: '2020-02-11',
            image: [
                'http://ccimg.hellomarket.com/images/2020/item/02/05/21/3350_1261925_1.jpg?size=s6',
                'http://ccimg.hellomarket.com/images/2020/item/02/05/21/3350_1261925_2.jpg?size=s6',
            ],
            detail: '구성품 전체 한 번도 사용하지 않은 새거에용!',
            tags: {
                배송비: '별도',
                location: undefined,
                isDetailHtml: false,
                상품상태: 'C',
            },
        });
    });
});

const input: DetailResponse = {
    status: 200,
    message: 'success',
    data: {
        title: '아이폰 7 구성품 팝니다',
        description: '구성품 전체 한 번도 사용하지 않은 새거에용!',
        categories: [
            {
                categoryId: 'HAK0000',
                name: '휴대폰,태블릿',
            },
            {
                categoryId: 'HAK0005',
                name: '액세서리,주변기기',
            },
        ],
        images: [
            {
                imageUrl:
                    'http://ccimg.hellomarket.com/images/2020/item/02/05/21/3350_1261925_1.jpg?size=s6',
            },
            {
                imageUrl:
                    'http://ccimg.hellomarket.com/images/2020/item/02/05/21/3350_1261925_2.jpg?size=s6',
            },
        ],
        tags: [],
        helpers: [],
        authority: {
            canChat: true,
            canPayment: true,
            canParcel: false,
            canUpdate: false,
        },
        property: {
            price: {
                amount: 40000,
                text: '40,000원',
            },
            usedType: {
                code: 'NotUsed',
                name: '새상품',
            },
            sellMethod: {
                code: 'Sell',
                name: '판매',
            },
            sellState: {
                code: 'ForSale',
                name: '판매중',
                isDeal: false,
            },
            delivery: {
                deliveryMethods: [
                    {
                        code: 'Parcel',
                        name: '택배',
                    },
                ],
                timelag: 1,
            },
            hasDeliveryFee: false,
            type: 'norm',
            isBarter: false,
            isEscrowOnly: true,
            isDirectDeal: true,
            showWatermark: false,
        },
        count: {
            comment: 0,
            wish: 2,
            visit: 36,
        },
        activity: {
            isWish: false,
        },
        share: {
            linkUrl: 'https://www.hellomarket.com/item/165559454',
        },
        member: {
            identity: {
                nick: '응응디',
                domain: '@12373036',
            },
            profile: {
                level: 1,
            },
            count: {
                item: 22,
                rating: 2,
                opinion: 2,
            },
            reputation: {
                score: 5,
            },
            type: 'norm',
            linkUrl: 'hellomarket://hellomarket.api/member/1261925',
            isBiz: false,
        },
        linkUrl: 'hellomarket://hellomarket.api/item/165559454',
        timeago: '02. 11.',
        timestamp: 1581401653338,
    },
};
