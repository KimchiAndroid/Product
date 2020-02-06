import { ProductListRequest, ProductListResponse, SiteCode } from '../../Common';
var a000 = require('../../API/dist/a000/product_list');
// var a001 = require('../../API/dist/a001/product_list');
// var a002 = require('../../API/dist/a002/product_list');
// var a003 = require('../../API/dist/a003/product_list');
// var a004 = require('../../API/dist/a004/product_list');
var a005 = require('../../API/dist/a005/product_list');

export const callApp = (data: ProductListRequest) => (
    site_code?: SiteCode,
): Promise<ProductListResponse[]> => {
    try {
        switch (site_code) {
            case '000':
                return a000.index(data);
            case '005':
                return a005.index(data);
            default:
                break;
        }
    } catch (err) {
        throw new Error(err);
    }
};
