import { responseMapping } from '../src/responseMapping';
import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';

describe('product_list Test', () => {
    it('responseMapping Test', () => {
        const output = responseMapping(input);
        expect(output).toStrictEqual({
            id: '165626414',
            site_code: '005',
            title: '아이폰XR 64G',
            price: 470000,
            isSelling: true,
            thumbnail:
                'http://ccimg.hellomarket.com/images/2020/item/02/11/15/1938961_4574417_1.jpg?size=s4',
        });
    });
});

const input: SiteResponseDetail = {
    type: 'item',
    item: {
        itemIdx: 165626414,
        type: 'biz',
        categoryId: 'HAK0012',
        title: '아이폰XR 64G',
        media: {
            imageUrl:
                'http://ccimg.hellomarket.com/images/2020/item/02/11/15/1938961_4574417_1.jpg?size=s4',
            videoUrl: '',
        },
        property: {
            price: {
                amount: 470000,
                text: '470,000원',
            },
            sellState: {
                code: 'ForSale',
                name: '판매중',
            },
            usedType: {
                code: 'Secondhand',
                name: '중고',
            },
            location: {
                address: '경남 창원시 성산구 중앙동',
                latitude: 35.22711442112954,
                longitude: 128.6795138809584,
            },
            isEscrowOnly: true,
            hasDeliveryFee: true,
            isBarter: false,
        },
        count: {
            comment: 0,
            wish: 0,
        },
        escrow: {
            isEscrow: false,
        },
        linkUrl: 'hellomarket://hellomarket.api/item/165626414',
        timeago: '1시간전',
    },
};
