import { ProductDetailRequest } from '../Common/action/product_detail/ProductDetailRequest.interface';
import { detailScrapComponent } from './src/detailScrap.comonent';

export const index = async (id: ProductDetailRequest) => {
    return detailScrapComponent(id.id).then(value => value);
};
