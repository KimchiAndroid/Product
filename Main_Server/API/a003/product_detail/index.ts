import { ProductDetailRequest } from '../Common/action/product_detail';
import { scrapProduct } from './src/SearchProduct';

export const index = async ({ id }: ProductDetailRequest) => {
    return scrapProduct(id)
        .then(value => value)
        .catch(err => {
            throw Error(err);
        });
};
