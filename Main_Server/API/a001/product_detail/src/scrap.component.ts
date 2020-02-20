import * as request from 'request-promise';
import { responseMappingDetail } from '../../product_detail/src/responseMapping';
import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';

export const scrapComponent = async (pid: string) => {
    const detail_headers = {
        url: `https://api.bunjang.co.kr/api/1/product/${pid}/detail_info.json`,
        qs: {
            stat_uid: '10649087',
            version: '4',
        },
    };
    const response = await request.get(detail_headers);
    const parser: SiteResponseDetail = JSON.parse(response);
    const content = responseMappingDetail(parser, pid);
    return content;
};
