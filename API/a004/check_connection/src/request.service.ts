import * as request from 'request';
import { APISite } from '../../option';
//요청에 대한 응답
export const requestService = () => {
    request.get(APISite, (err, res) => {
        if (err) console.log(err);
        console.log(res.body);
    });
};
