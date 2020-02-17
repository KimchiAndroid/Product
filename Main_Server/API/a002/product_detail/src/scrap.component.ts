import * as rp from 'request-promise';
import { responseMapping } from './responseMapping';
import { detailurl, imageurl } from '../../option';

export const scrapComponent = ( id: string ) => {
    const options = {
      headers:{'Content-Type':'application/json;charset=UTF-8' }, 
  };
  return rp.get( detailurl+id , options);
};

scrapComponent('18543108') //18543108 장소있음 17312106 없음 15607362배송비있음
.then(value => {
    const response = JSON.parse(value); 
    const testt = response.data.media.map((item: any, index: any, array: any) => {
        return imageurl+item.mediaUrl;
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