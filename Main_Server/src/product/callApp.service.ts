import { index as a000_detail } from '../../API/a000/product_detail';
import { index as a001_detail } from '../../API/a001/product_detail';
import { index as a002_detail } from '../../API/a002/product_detail';
// import { index as a003_detail } from '../../API/a003/product_detail';
import { index as a004_detail } from '../../API/a004/product_detail';
import { index as a005_detail } from '../../API/a005/product_detail';
import { index as a000_list } from '../../API/a000/product_list';
import { index as a001_list } from '../../API/a001/product_list';
import { index as a002_list } from '../../API/a002/product_list';
// import { index as a003_list } from '../../API/a003/product_list';
import { index as a004_list } from '../../API/a004/product_list';
import { index as a005_list } from '../../API/a005/product_list';
import {
    ProductDetailRequest,
    ProductDetailResponse,
    ProductListRequest,
    ProductListResponse,
    SiteCode,
} from '../../Common';

export const productListAPI = (data: ProductListRequest) => (
    site_code?: SiteCode,
): Array<Promise<ProductListResponse[]>> => {
    switch (site_code) {
        case '000':
            return [a000_list(data)];
        case '001':
            return [a001_list(data)];
        case '002':
            return [a002_list(data)];
        case '003':
            return [];
        case '004':
            return [a004_list(data)];
        case '005':
            return [a005_list(data)];
        default:
            return;
    }
};

export const productDetailAPI = (input: ProductDetailRequest): Promise<ProductDetailResponse> => {
    switch (input.site_code) {
        case '000':
            return a000_detail(input);
        case '001':
            return a001_detail(input);
        case '002':
            return a002_detail(input);
        case '003':
            return;
        case '004':
            return a004_detail(input);
        case '005':
            return a005_detail(input);
        default:
            return;
    }
};
