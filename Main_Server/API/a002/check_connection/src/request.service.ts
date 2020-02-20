import * as rp from 'request-promise';
import { APISite } from '../../option';

const makejson = {
    filter: {categoryDepth: 0,categorySeq: 0,color: '',condition: {options: { flawedYn: 0, fullPackageYn: 0, limitedEditionYn: 0 },productCondition: -1,},locations: [{ locationCode: '', locationType: -1 }],maxPrice: 0,minPrice: 0,platformType: 1,preferredTrade: 0,sortEndDate: '',sortStartDate: '',state: -1,productSectionType: 0,},isSearchSaved: 0,searchQuantity: 0,searchWord: '',sort: { date: 0, order: 0, price: 0 },startIndex: 0,
  };

export const requestService = () => {
    const options = {
        body:JSON.stringify(makejson),
        headers:{'Content-Type':'application/json;charset=UTF-8'
        }, 
    };
    return new Promise(resolve =>
        rp.post(APISite, options, (error, response) => {
            if (error) {
                return resolve({
                    isSuccess: false,
                    error,
                });
            }
            if (response.statusCode !== 200) {
                return resolve({
                    isSuccess: false,
                    error,
                });
            }
            return resolve({
                isSuccess: true,
            });
        }),
    );
};