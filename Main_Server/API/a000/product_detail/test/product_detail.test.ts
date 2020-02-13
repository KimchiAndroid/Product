import { makeQuery } from '../src/scrap.component';

describe('Product Detail Test', () => {
    it('makeQuery function test', () => {
        const query = makeQuery('test query');
        expect(query).toStrictEqual({ method: 'getSellerProductDetail', prdNo: 'test query' });
    });
});
