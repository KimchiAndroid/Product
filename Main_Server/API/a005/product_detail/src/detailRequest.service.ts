import { detailAPIsite } from '../../option';
import * as request from 'request-promise';

export const detailRequestService = async (id: string) => {
    const option = {
        uri: detailAPIsite + id,
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        },
    };

    const res = await request(option);
    return res;
};
