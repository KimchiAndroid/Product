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

const testt = {
    filter: {
      categoryDepth: 0,
      categorySeq: 0,
      color: '',
      condition: {
        options: { flawedYn: 0, fullPackageYn: 0, limitedEditionYn: 0 },
        productCondition: -1,
      },
      locations: [{ locationCode: '', locationType: -1 }],
      maxPrice: 0,
      minPrice: 0,
      platformType: 1,
      preferredTrade: 0,
      sortEndDate: '',
      sortStartDate: '',
      state: -1,
      //categorySeqList: [],
      productSectionType: 0,
    },
    isSearchSaved: 1,
    searchQuantity: 16,
    searchWord: '모니터',
    sort: { date: 0, order: 0, price: 0 },
    startIndex: 0,
  };

export const scrapComponent = async ({ search_word,page }: ProductListRequest) => {
      const options = {
        body:JSON.stringify(testt),
        headers:{'Content-Type':'application/json;charset=UTF-8'
        }, 
    };
    return rp.post('https://api.joongna.com/elastic/type2/2', options);
};

scrapComponent({ search_word: '모니터', page: '1' })
    .then(value => console.log(value))
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));
