// import * as request from 'request-promise';
// import { parserFrame } from '../../interfaces/SiteRequest.interface';
// import { responseMappingDetail } from '../../product_detail/src/responseMapping';
// import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';

// async function BunjangList(q: string, page: number) {
//     const list_headers = {
//         url: 'https://api.bunjang.co.kr/api/1/find_v2.json',
//         qs: {
//             q,
//             stat_uid: '10649087',
//             version: '4',
//             page,
//         },
//     };
//     const response = await request.get(list_headers);
//     const parser: parserFrame = JSON.parse(response);
//     const content = parser.list.map(res => responseMapping(res));
//     //console.dir(content, { depth: 3 });
//     return content;
// }

// async function BunjangDetail(pid: string) {
//     const detail_headers = {
//         url: `https://api.bunjang.co.kr/api/1/product/${pid}/detail_info.json`,
//         qs: {
//             stat_uid: '10649087',
//             version: '4',
//         },
//     };
//     const response = await request.get(detail_headers);
//     const parser: SiteResponseDetail = JSON.parse(response);
//     const content = responseMappingDetail(parser, pid);
//     console.dir(content, { depth: 5 });
//     return content;
// }

// BunjangList('모니터', 5);
// BunjangDetail('97378657');
