import { ProductDetailRequest } from '../Common/action';
import { mapping } from './src/scrap.component';

export const index = async (input : ProductDetailRequest) => {
    return mapping(input);
};
