import { ProductListRequest } from '../Common/action/product_list';
import { scrapSite } from './src/SearchProductList';

export const index = async (keyword: ProductListRequest) => {
    return scrapSite(keyword).then(value => value);
};
