import { ProductListRequest } from '../Common';
import { scrapComponent } from './src/scrap.component';

export const index = (input: ProductListRequest) => {
    return scrapComponent(input);
};
