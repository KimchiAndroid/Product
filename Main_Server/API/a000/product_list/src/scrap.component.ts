import * as iconv from 'iconv-lite';
import { parseStringPromise } from 'xml2js';
import { APIkey } from '../../option';
import { SiteResponse, SiteResponseDetail } from '../../interfaces/SiteResponse.interface';
import { requestService } from './request.service';
import { responseMapping } from './responseMapping';
import { SiteRequest } from '../../interfaces/SiteRequest.interface';
import { ProductListRequest } from '../../Common';

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
    const query_string = makeQuery(search_word, page);
    const response = await requestService(query_string);
    const xml_string = iconv.decode(Buffer.from(response), 'EUC-KR').toString();
    const product_list: SiteResponse = await parseStringPromise(xml_string);
    const product_detail_list: SiteResponseDetail[] =
        product_list.ProductSearchResponse.Products[0].Product;
    const mapping_to_form = product_detail_list.map(responseMapping);
    return mapping_to_form;
};

export const makeQuery = (keyword: string, pageNum: string): SiteRequest => ({
    key: APIkey,
    apiCode: 'ProductSearch',
    keyword,
    pageNum,
    pageSize: '60',
});
