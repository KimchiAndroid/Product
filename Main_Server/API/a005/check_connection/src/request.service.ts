import * as rp from 'request-promise';
import { APIsite } from '../../option';

export const requestService = () => {
    return new Promise(resolve =>
        rp(APIsite, (error, response) => {
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
