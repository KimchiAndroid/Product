import * as rp from 'request-promise';
import * as cheerio from 'cheerio';

 const basesiteurl = 'https://m.cafe.naver.com/ArticleSearchList.nhn?';
 const cafeurl = 'https://m.cafe.naver.com';
 /*const requestService = async (qs : SiteRequest) => {
    return rp.get({ url : basesiteurl, qs : makeqs , json: true, encoding: null});
  };*/
  const makeqstest= (keyword : string )=> ({
    'search.query' : keyword, 
    'search.menuid' : 0,
    'search.searchBy' : 0,
    'search.sortBy' : 'date',
    'search.clubid' : '10050146', //중고나라id
    'search.option' : 0,
    'search.defaultValue' : 1,
  });
  const scrapComponent = async (keyword : string ) => {
    //const siteurl = await rp("https://m.cafe.naver.com/ArticleAllListAjax.nhn?search.clubid=10050146&search.boardtype=L&search.questionTab=A&search.totalCount=201&search.page=2");
    const qs = Object.entries(makeqstest(keyword)).map(e => e.join('=')).join('&');
    const queryurl = encodeURI(basesiteurl+qs);
    console.log(queryurl);

    const siteurl = await rp(queryurl);
    const $ = cheerio.load(siteurl);
    const titles = $('.search_list .tit h3')
        .map((index, element) => {
            return $(element).text();
        })
        .toArray();
    console.log(titles);

    const url = $('.search_list .list_tit a')
        .map((index, element) => {
            return cafeurl+$(element).attr("href");
        })
        .toArray();
​    console.log(url);
};

/*const makeqs = {
    'search.clubid' : '10050146',  //중고나라id
    'search.boardtype' : 'L',
    'search.questionTab' : 'A',
    'search.totalCount' : '201',
    'search.page' : 1,
  };*/

interface SiteRequest {
    'search.clubid' : string;
    'search.boardtype': string;
    'search.questionTab' : string;
    'search.totalCount' : string;
    'search.page' : number;
  }

  interface ProductlistRequest {
    id: number;
    site_code : '002';
    title: string;
    price: number;
    thumbnail?: string;
  }

scrapComponent('모니터')
.then(value => console.log(value))
.catch(err => console.log(err))
.finally(() => process.exit(0));