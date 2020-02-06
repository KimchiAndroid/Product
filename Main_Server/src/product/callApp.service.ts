import { ProductListRequest, ProductListResponse, SiteCode } from '../../Common';
import { index as a000 } from '../../API/a000/product_list';
// import { index as a001 } from '../../API/a001/product_list';
// import { index as a002 } from '../../API/a002/product_list';
// import { index as a003 } from '../../API/a003/product_list';
// import { index as a004 } from '../../API/a004/product_list';
import { index as a005 } from '../../API/a005/product_list';

export const callApp = (data: ProductListRequest) => (
    site_code?: SiteCode,
): Array<Promise<ProductListResponse[]>> => {
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
            return [];
        default:
            return [a000(data)];
    }
};
