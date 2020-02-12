import { ProductDetailResponse } from '../../Common/action';
import { SiteDetailRequest } from '../../interfaces/SiteDetailRequest.interface';
import { originSite } from '../../option';

export const responseMapping = ($: CheerioStatic) => (id: string) => (
    query: SiteDetailRequest,
): ProductDetailResponse => ({
    id,
    site_code: '000',
    origin_url: originSite.concat('?', 'method=', query.method, '&prdNo=', query.prdNo),
    title: $('div.heading > h2').text(),
    price: parseInt(
        $('.sale_price')
            .first()
            .text(),
        10,
    ),
    image: [
        $('.v-align>img')
            .first()
            .attr('src'),
    ],
    detail: $('#tabProductInfo').html(),
    tags: {
        배송비: !!$('#prdcInfoColumn2 > div:nth-child(7) > div > div.col.first').text()
            ? '무료'
            : '별도',
    },
});
