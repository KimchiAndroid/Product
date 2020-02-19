import * as rp from 'request-promise';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';
import { SiteListRequest, ListResult } from '../../interfaces/SiteRequest.interface';
import { APISite } from '../../option';

const scrapComponent = ( search_word: string, page: string ) => {
      const options = {
        body:JSON.stringify(makejson( search_word, page )),
        headers:{'Content-Type':'application/json;charset=UTF-8'
        }, 
    };
    return rp.post(APISite, options);
};

export const mapping = async ({ search_word, page }: ProductListRequest) => {
  return scrapComponent( search_word, page )
    .then(value => {
      const response = JSON.parse(value);
      console.log(response);
      const mappingArray : ListResult = response.data.map(function(element: any) {
        return responseMapping(element);
      });
      return mappingArray;
    })
};

const makejson = (keyword: string, pageNum: string): SiteListRequest => ({
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
  isSearchSaved: 0,
  searchQuantity: Number(pageNum),
  searchWord: keyword,
  sort: { date: 0, order: 0, price: 0 },
  startIndex: 0,
});





mapping({ search_word: '모니터', page: '60' })
    .then(value => console.log(value))
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));