import * as rp from 'request-promise';
import { SiteDetailResponse } from '../../interfaces/SiteResponse.interface';
//import { requestService } from '../../product_list/src/request.service';
import { responseMapping } from './responseMapping';

export const scrapComponent = async ( id: string ) => {
    const options = {
      headers:{'Content-Type':'application/json;charset=UTF-8' }, 
  };
  return rp.get('https://api.joongna.com/product/'+id , options);
};

scrapComponent('18543108') //18543108 장소있음 17312106 없음 15607362배송비있음
.then(value => {
    const response = JSON.parse(value); 
    const testt = response.data.media.map((item: any, index: any, array: any) => {
        return 'https://img-joonggonara.akamaized.net'+item.mediaUrl;
    });
    //console.log(test);
    const test =  responseMapping(response.data, testt );
        console.log(test);
})
.catch(err => {
    console.log(err);
    throw new Error(err);
})
.finally(() => process.exit(0));