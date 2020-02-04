import * as request from 'request-promise';
import { detailRequestService } from '../src/detailRequest.service';
import { detailResponseMapping } from '../src/detailResponseMapping';
import { DetailResponse } from '../../interfaces/DetailResponse.interface';

export const detailScrapComponent = async (id: string) => {
    const res = await detailRequestService(id);
    const parser: DetailResponse = JSON.parse(res);
    const detail = detailResponseMapping(parser);
    return detail;
};
