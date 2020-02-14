import { ProductDetailRequest } from '../Common/action';
import { scrapComponent } from './src/scrap.component';

export const index = async ({ id }: ProductDetailRequest) => {
    return scrapComponent(id)
        .then(value => value)
        .catch(err => {
            throw Error(err);
        });
};