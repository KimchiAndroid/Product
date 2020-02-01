import * as request from 'request-promise';

interface parserFrame {
    flags: string[];
}
const html_headers = {
    url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
    qs: {
        q: '모니터',
        // order: 'date',
        // page: '0',
        // request_id: '2020116163717',
        stat_uid: '10649087',
        // stat_device: 'w',
        // n: '100',
        // stat_category_required: '1',
        // req_ref: 'search',
        version: '4',
    },
};
// JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고,
// 그 결과에서 JavaScript 값이나 객체를 생성합니다.
// 선택적으로, reviver 함수를 인수로 전달할 경우,
// 결과를 반환하기 전에 변형할 수 있습니다.
function htmlBunjang() {
    return request.get(html_headers, (err, res, body) => {
        if (err) {
            throw new Error(err);
        }
        return body;
    });
}
htmlBunjang().then(html => {
    const parser: parserFrame = JSON.parse(html);
    //console.log(parser);
    console.dir(parser, { depth: 2 });
});
