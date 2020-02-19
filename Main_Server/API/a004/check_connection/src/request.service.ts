import * as request from 'request-promise';
import { CheckLinkResponse } from '../../Common/action';
import { response } from 'express';

export const requestService = async () => {
    let result: CheckLinkResponse = {
        isSuccess: false,
        error: null,
    };
    await request('https://www.withsellit.com/api/v1/goods?ids%5B%5D=631704', (error, res) => {
        if (error) {
            result.error = error;
        }
        if (response.statusCode !== 200) {
            result = { isSuccess: false, error };
        }
        result = { isSuccess: true };
    });
    return result;
};
