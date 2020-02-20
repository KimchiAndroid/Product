import * as rp from 'request-promise';
import { APISite } from '../../option';
import { CheckLinkResponse } from '../../Common';

export const requestService = () => {
    return new Promise<CheckLinkResponse>(resolve =>
        rp(APISite, (error, response) => {
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
