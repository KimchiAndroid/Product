import * as rp from 'request-promise';

export const requestService = () => {
    return new Promise(resolve =>
        rp('https://www.daangn.com', (error, response) => {
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
