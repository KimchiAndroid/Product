
import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
//import { basesiteurl, cafeurl } from '../../option';
import { responseMapping } from './responseMapping';
import { SiteRequest } from '../../interfaces/SiteRequest.interface';
import { ProductListRequest } from '../../Common';
import * as request from 'request';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { SiteListRequest } from '../../interfaces/SiteRequest.interface';


  export const scrapComponent = async ({ search_word }: ProductListRequest) => {
    const options = {
        url: 'https://m.joongna.com/search-list',
        method: 'POST',
        port: 200,
        body:{
          key:'value'
        },
        
        json:true
    };
    /*
    request.post('https://m.joongna.com/search-list', {form:{key:'value'}}, (error, response, body) =>{
        console.log("asf");
        console.log('post error:', error);
        console.log('post statusCode:', response && response.statusCode); 
        console.log('body:', body);
    });
    */
    request.post({url:'https://search-api.joongna.com/v2/search/usedGoods?hasTab=0', formData: testt}, function (err, httpResponse, body) {
        console.log(httpResponse.body);
    });

    request.post(options, function(err,httpResponse,body){ 
        //console.log(body);
       //console.log(httpResponse);

        console.log("2");
    })
    const response = await rp(options);
    console.log("111");
     
};

scrapComponent({ search_word: '모니터'})
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));

const testt = {
    filter: {
        categoryDepth: 0, 
        categorySeq: 0, 
        color: "ZZZZZZ",
        condition: {options: {flawedYn: 0, fullPackageYn: 0, limitedEditionYn: 0}, productCondition: -1},
        //locations: [],
        maxPrice: 0,
        minPrice: 0,
        platformType: 1,
        preferredTrade: 0,
        sortEndDate: "",
        sortStartDate: "",
        state: -1,
        //categorySeqList: [],
        productSectionType: 0,
        searchStartDate: "2020-02-09 06:49:08",
    },
    isSearchSaved: 1,
    searchQuantity: 20,
    searchWord: "모니터",
    sort: {date: 0, order: 0, price: 0},
    startIndex: 0,
}
      