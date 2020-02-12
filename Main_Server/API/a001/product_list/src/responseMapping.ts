import { SiteResponseList } from '../../interfaces/SiteResponse.interface';
import { ProductListResponse } from '../../Common/action';

export const responseMapping = (input: SiteResponseList): ProductListResponse => ({
    id: input.pid,
    site_code: '001',
    title: input.name,
    price: parseInt(input.price, 10) || -1,
    isSelling: true,
    thumbnail: input.product_image,
});
