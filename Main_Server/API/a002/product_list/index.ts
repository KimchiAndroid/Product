import { ProductListRequest } from '../Common/action';
import { mapping } from './src/scrap.component';

export const index = async (keyword: ProductListRequest) => {
    return mapping(keyword).then(value => value);
};
