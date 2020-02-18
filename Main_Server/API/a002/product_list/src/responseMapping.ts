import { SiteListResponse } from '../../interfaces/SiteResponse.interface';
import { ProductListResponse } from '../../Common/action';
import { imageurl } from '../../option';

export const responseMapping = (input: SiteListResponse): ProductListResponse => ({
    id: String(input.seq),
    site_code: '002',
    title: input.title,
    price: input.price,
    isSelling: true,
    thumbnail: imageurl + input.url,
  });