import { scrapComponent } from './src/scrap.component';
import { ProductListRequest } from '../Common/action';

export const index = async (keyword: ProductListRequest) => {
    return scrapComponent(keyword.search_word, Number.parseInt(keyword.page)).then(value => value);
};
