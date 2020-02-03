import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductListResponse } from '../../Common/action';

export const responseMapping = (input: SiteResponseDetail): ProductListResponse => ({
    id: Number.parseInt(input.item.linkUrl.split('/')[4]),
    site_code: '005',
    title: input.item.title,
    price: input.item.property.price.amount,
    thumbnail: input.item.media.imageUrl,
});
