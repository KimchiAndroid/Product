import { ProductListRequest } from '../Common/action';
import { mapping } from './src/scrap.component';

export const index = async (input: ProductListRequest) => {
    return mapping(input)
        .then(value => value)
        .catch(err => {
            throw new Error(err);
        });
};
