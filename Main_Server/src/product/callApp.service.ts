import { ProductListRequest, ProductListResponse, SiteCode } from '../../Common';
import { index as a000 } from '../../API/a000/product_list';
import { index as a005 } from '../../API/a005/product_list';
// var a001 = require('../../API/dist/a001/product_list');
// var a002 = require('../../API/dist/a002/product_list');
// var a003 = require('../../API/dist/a003/product_list');
// var a004 = require('../../API/dist/a004/product_list');

export const callApp = (data: ProductListRequest) => (
    site_code?: SiteCode,
): Array<Promise<ProductListResponse[]>> => {
    try {
        switch (site_code) {
            case '000':
                return [a000(data)];
            case '001':
                return [];
            case '002':
                return [];
            case '003':
                return [];
            case '004':
                return [];
            case '005':
                return [a005(data)];
            default:
                return [a000(data), a005(data)];
        }
    } catch (err) {
        throw new Error(err);
    }
};
