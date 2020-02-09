import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
import { basesiteurl, cafeurl } from '../../option';
import { SiteResponse, SiteResponseDetail, SiteResponseDetailOne } from '../../interfaces/SiteResponse.interface';
import { responseMapping } from './responseMapping';
import { SiteRequest } from '../../interfaces/SiteRequest.interface';

  const makeqs= (keyword : string )=> ({
    'search.query' : keyword, 
    'search.menuid' : 0,
    'search.searchBy' : 0,
    'search.sortBy' : 'date',
    'search.clubid' : '10050146', //중고나라id
    'search.option' : 0,
    'search.defaultValue' : 1,
  });
  export const scrapComponent = async (keyword : string ) => {

    //const response = await rp.get("https://openapi.naver.com/v1/search/cafearticle.json");
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    $.getJSON(requestURL,function(data){
      const items = data.item.items;
          console.log(items);
    });

   /*
    //const siteurl = await rp("https://m.cafe.naver.com/ArticleAllListAjax.nhn?search.clubid=10050146&search.boardtype=L&search.questionTab=A&search.totalCount=201&search.page=2");
    const qs = Object.entries(makeqs(keyword)).map(e => e.join('=')).join('&');
    const queryurl = encodeURI(basesiteurl+qs);
    console.log(queryurl);

    const siteurl = await rp(queryurl);
    const $ = cheerio.load(siteurl);
    const titles = $('.search_list .tit h3')
        .map((index, element) => {
            return $(element).text();
        })
        .toArray();
    //console.log(titles);

    const url = $('.search_list .list_tit a')
        .map((index, element) => {
            return cafeurl+$(element).attr("href");
        })
        .toArray();
​    //console.log(url);

    //const product_detail_list: SiteResponseDetail[] = 
    //product_list.ProductSearchResponse.Products[0].Product;
    //return mapping_to_form;
*/
};

  interface ProductlistRequest {
    id: number;
    site_code : '002';
    title: string;
    price: number;
    thumbnail?: string;
  }