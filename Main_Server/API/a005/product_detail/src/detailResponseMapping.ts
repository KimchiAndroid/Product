import { DetailResponse } from '../../interfaces/DetailResponse.interface';
import { ProductDetailResponse } from '../../Common/action/product_detail/ProductDetailResponse.interface';

export const detailResponseMapping = (input: DetailResponse): ProductDetailResponse => ({
    id: Number.parseInt(input.data.linkUrl.split('/')[4]),
    site_code: '005',
    origin_url: input.data.share.linkUrl,
    title: input.data.title,
    price: input.data.property.price.amount,
    date: input.data.timeago,
    image: input.data.images.map(value => value.imageUrl),
    detail: input.data.description,
    tags: {
        location: input.data.property.location.address,
        delivery: input.data.property.hasDeliveryFee == true ? '배송비있음' : '무료배송',
    },
});
