import { responseMapping } from '../src/responseMapping';
import { SiteResponseList } from '../../interfaces/SiteResponse.interface';
import { queryString } from '../src/scrap.component';
import { ProductListResponse } from '../../Common';

describe('Product List Test', () => {
    it('makeQuery function Test', () => {
        const query = queryString('test product', '2', 60);
        expect(query).toStrictEqual({
            q: 'test product',
            stat_uid: '10649087',
            version: '4',
            page: '2',
            n: 60,
        });
    });
    it('responseMapping function Test', () => {
        const output_test = responseMapping(input_test);
        expect(output_test).toEqual<ProductListResponse>({
            id: '123',
            site_code: '001',
            title: 'ProductName',
            price: 10000,
            isSelling: true,
            thumbnail: 'ProductImage',
        });
    });
});

const input_test: SiteResponseList = {
    name: 'ProductName',
    pid: '123',
    price: '10000',
    product_image: 'ProductImage',
};
