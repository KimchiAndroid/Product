import * as rp from 'request-promise';
import { responseMapping } from './responseMapping';
import { ProductListRequest } from '../../Common';
import { SiteListRequest, parserFrame, ListResult } from '../../interfaces/SiteRequest.interface';

export const makejson = (keyword: string, pageNum: string): SiteListRequest => ({
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
  searchWord: keyword,
  sort: { date: 0, order: 0, price: 0 },
  startIndex: 0,
});

export const scrapComponent = async ({ search_word, page }: ProductListRequest) => {
      const options = {
        body:JSON.stringify(makejson( search_word, page )),
        headers:{'Content-Type':'application/json;charset=UTF-8'
        }, 
    };
    return rp.post('https://api.joongna.com/elastic/type2/2', options);
};

//export const mapping = async ({ search_word, page }: ProductListRequest) => {
  scrapComponent({ search_word : '모니터', page : '1' })
    .then(value => {
      const response = JSON.parse(value);
      const parser: parserFrame = response.data;
      const subArray : ListResult = response.data.forEach(function(element: any) {
        const test =  responseMapping(element);
        console.log(test);
      });
    })
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));
 // };
