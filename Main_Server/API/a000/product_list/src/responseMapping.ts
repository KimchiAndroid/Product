import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { ProductListResponse } from '../../Common/action';

export const responseMapping = (input: SiteResponseDetail): ProductListResponse => ({
    id: input.ProductCode[0],
    site_code: '000',
    title: input.ProductName[0],
    price: parseInt(input.SalePrice[0], 10),
    thumbnail: input.ProductImage100[0],
    isSelling: true,
});
