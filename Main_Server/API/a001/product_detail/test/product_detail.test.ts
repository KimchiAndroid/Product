import { responseMappingDetail } from '../src/responseMapping';
import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common';

describe('Product detail Test', () => {
    it('responseMapping function Test', () => {
        const output_test = responseMappingDetail(input_test, '123');
        expect(output_test).toEqual<ProductDetailResponse>({
            id: '123',
            site_code: '001',
            origin_url: 'https://m.bunjang.co.kr/products/123',
            title: 'ProductName',
            price: 10000,
            date: '2020-02-11',
            image: ['image'],
            detail: 'detail',
            tags: {
                배송비: '무료',
                location: '서울시',
                isDetailHtml: false,
                교환: '가능',
                상품상태: 'A',
            },
        });
    });
});

const input_test: SiteResponseDetail = {
    item_info: {
        name: 'ProductName',
        price: '10000',
        update_time: 1581425055,
        free_shipping: true,
        product_image: 'image',
        description: 'detail',
        location: '서울시',
        is_free_sharing: true,
        bizseller: true,
    },
};
