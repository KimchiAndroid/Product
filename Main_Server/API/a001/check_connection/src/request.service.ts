import * as request from 'request-promise';
import { APISite } from '../../option';
import { CheckLinkResponse } from '../../Common';

export const requestService = (): Promise<CheckLinkResponse> => {
    return new Promise(resolve =>
        request(APISite, (error, response) => {
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
        }),
    );
};
