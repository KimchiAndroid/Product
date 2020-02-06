import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
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
        $(
            '#prdcInfoColumn2 > div.prdc_default_info > div.price_info > span.price_detail > strong',
        ).text(),
        10,
    ),
    image: [$('#thumb > div > div.largeImg > img').attr('src')],
    detail: $('#tabProductInfo').text(),
    tags: {
        delivery: $('#prdcInfoColumn2 > div:nth-child(7) > div > div.col.first').text(),
    },
});
