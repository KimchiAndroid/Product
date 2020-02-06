import * as request from 'request-promise';

interface Temp {
    message: {
        terrier: string[];
    };
}
// function dogAPI1(url: string) {
//     return new Promise((resolve, reject) => {
//         request.get(url, (err, res, body: string) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(body);
//         });
//     }).then((response: string) => {
//         const result: Temp = JSON.parse(response);
//         //console.log(result);
//         //console.log(result.message);
//         //console.log(result.message.terrier);
//         console.log(result.message.terrier.join(''));
//         //console.log(response);
//     });
// }
function dogAPI() {
    return request.get('https://dog.ceo/api/breeds/list/all', (err, res, body) => {
        if (err) {
            return new Error(err);
        }
        return body;
    });
}
dogAPI().then((res: string) => {
    const result: Temp = JSON.parse(res);
    console.log(result);
});
//dogAPI('https://dog.ceo/api/breeds/list/all');
