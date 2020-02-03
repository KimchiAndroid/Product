import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
//import * as iconv from 'iconv-lite';

 const siteurl = 'https://m.cafe.naver.com/ArticleAllListAjax.nhn';
 const requestService = async (qs : SiteRequest) => {
    return rp.get({ url : siteurl, qs : makeqs , json: true, encoding: null});
  };

(async() => {
    let ulList = [];
    //const siteurl = await rp("https://m.cafe.naver.com/ArticleAllListAjax.nhn?search.clubid=10050146&search.boardtype=L&search.questionTab=A&search.totalCount=201&search.page=2");
    //const siteurl = await rp("https://m.cafe.naver.com/ArticleAllListAjax.nhn");
    const response = await requestService(makeqs);
    //var rpbuffer = new Buffer(response);
    //const xml_string = iconv.decode(rpbuffer, 'EUC-KR').toString();
    console.log(response);
    console.log(Buffer.from(response).toString());

    const $ = cheerio.load(response);
   // rp.get(siteurl, params);
    const url = $('.list_area .board_box a.txt_area')
        .map((index, element) => {
            return $(element).attr("href");
        })
        .toArray();
    //console.log(url);

    const titles = $('.txt_area .tit')
        .map((index, element) => {
            return $(element).text();
        })
        .toArray();
​    //console.log(titles);
})();

const makeqs = {
    'search.clubid' : '10050146',  //중고나라id
    'search.boardtype' : 'L',
    'search.questionTab' : 'A',
    'search.totalCount' : '201',
    'search.page' : 1,
  };
/*
const params = {
    'search.clubid' : '10050146',  //중고나라id
    'search.boardtype' : 'L',
    'search.questionTab' : 'A',
    'search.totalCount' : '201',
    'search.page' : 1,
}*/
interface SiteRequest {
    'search.clubid' : string;
    'search.boardtype': string;
    'search.questionTab' : string;
    'search.totalCount' : string;
    'search.page' : number;
  }