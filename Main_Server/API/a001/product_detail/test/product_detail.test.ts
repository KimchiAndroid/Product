import { responseMappingDetail } from '../src/responseMapping';
import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductDetailResponse } from '../../Common';

describe('Product detail Test', () => {
    it('responseMapping function Test', () => {
        const output_test = responseMappingDetail(input_test, '123');
        expect(output_test).toEqual<ProductDetailResponse>({
            id: '123',
            site_code: '001',
            origin_url: 'https://api.bunjang.co.kr/api/1/product/123/detail_info.json',
            title: 'ProductName',
            price: 10000,
            date: '1970-01-02',
            image: ['image'],
            detail: 'detail',
            tags: { delivery: '무료배송', location: '서울시' },
        });
    });
});

const input_test: SiteResponseDetail = {
    item_info: {
        name: 'ProductName',
        price: '10000',
        update_time: 123432,
        free_shipping: true,
        product_image: 'image',
        description: 'detail',
        location: '서울시',
    },
};
