import * as rp from 'request-promise';
import { originSite } from '../../option';

export const requestService = async (qs: any) => {
    return rp.get({ url: originSite, qs, json: true, encoding: null });
};
