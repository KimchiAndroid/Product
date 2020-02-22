import { ProductListRequest } from '../Common';
import { scrapComponent } from './src/scrap.component';

export const index = async (input: ProductListRequest) => {
    return scrapComponent(input)
        .then(value => value)
        .catch(err => {
            throw new Error(err);
        });
};
