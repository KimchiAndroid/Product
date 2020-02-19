import * as rp from 'request-promise';
import { responseMapping } from './responseMapping';
import { detailurl, imageurl } from '../../option';
import { ProductDetailRequest } from '../../Common';

const scrapComponent = ( id: string ) => {
    const options = {
      headers:{'Content-Type':'application/json;charset=UTF-8' }, 
  };
  return rp.get( detailurl + id , options);
};

export const mapping = async ( {id} : ProductDetailRequest) => {
    return scrapComponent(id)
      .then(value => {
        const response = JSON.parse(value); 
        const imagemapping = response.data.media.map((item: { mediaUrl: string; }, index: any, array: any) => {
            return imageurl+item.mediaUrl;
        });
        const mappingArray =  responseMapping(response.data, imagemapping );
        return mappingArray;
      })
  };