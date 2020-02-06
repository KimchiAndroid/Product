import {
    ProductListRequest,
    ProductListResponse,
    SiteCode,
    ProductDetailRequest,
} from '../../Common';
import { index as a000_list } from '../../API/a000/product_list';
// import { index as a001_list } from '../../API/a001/product_list';
// import { index as a002_list } from '../../API/a002/product_list';
// import { index as a003_list } from '../../API/a003/product_list';
// import { index as a004_list } from '../../API/a004/product_list';
import { index as a005_list } from '../../API/a005/product_list';
import { index as a000_detail } from '../../API/a000/product_detail';

export const productListAPI = (data: ProductListRequest) => (
    site_code?: SiteCode,
): Array<Promise<ProductListResponse[]>> => {
    switch (site_code) {
        case '000':
            return [a000_list(data)];
        case '001':
            return [];
        case '002':
            return [];
        case '003':
            return [];
        case '004':
            return [];
        case '005':
            return [];
        default:
            return [a000_list(data)];
    }
};

export const productDetailAPI = (input: ProductDetailRequest) => {
    switch (input.site_code) {
        case '000':
            return [a000_detail(input)];
        case '001':
            return [];
        case '002':
            return [];
        case '003':
            return [];
        case '004':
            return [];
        case '005':
            return [];
        default:
            return [a000_detail(input)];
    }
};
