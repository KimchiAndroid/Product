import * as request from 'request-promise';
import { APISite } from '../../option';

export const requestService = () => {
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
