import * as request from 'request-promise';
import { APIsite } from '../../option';
import { CheckLinkResponse } from '../../Common';

export const requestService = () => {
    const option = {
        uri: APIsite,
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        },
    };
    return new Promise<CheckLinkResponse>(resolve => {
        request(option, (error, response) => {
            if (error) {
                return resolve({
                    isSuccess: false,
                    error,
                });
            }
            if (response.statusCode !== 200) {
                return resolve({
                    isSuccess: false,
                    error,
                });
            }
            return resolve({
                isSuccess: true,
            });
        });
    });
};
