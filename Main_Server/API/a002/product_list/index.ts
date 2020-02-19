import { ProductListRequest } from '../Common/action';
import { mapping } from './src/scrap.component';

export const index = async (input: ProductListRequest) => {
    return mapping(input);
};