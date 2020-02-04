import * as iconv from 'iconv-lite';
import { requestService } from '../../product_list/src/request.service';
import * as cheerio from 'cheerio';
import { responseMapping } from './responseMapping';
import { SiteDetailRequest } from '../../interfaces/SiteDetailRequest.interface';

export const scrapComponent = async (id: string) => {
    const query_string = makeQuery(id);
    const response = await requestService(query_string);
    const html_string = iconv.decode(Buffer.from(response), 'EUC-KR');
    const $ = cheerio.load(html_string);
    const result = responseMapping($)(id)(query_string);
    return result;
};

const makeQuery = (prdNo: string): SiteDetailRequest => ({
    method: 'getSellerProductDetail',
    prdNo,
});
