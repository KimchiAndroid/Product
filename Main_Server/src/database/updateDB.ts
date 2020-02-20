import { scheduleJob } from 'node-schedule';
import { productListAPI } from '../product/callApp.service';
import { filter_str_list } from '../product/productFilter';
import { updateData } from './connect.service';

export const updateDB = () =>
    scheduleJob({ minute: 0, second: 0 }, () => {
        filter_str_list.forEach(updateSingleWord);
    });

export const updateSingleWord = async (str: string) => {
    let page = 1;
    while (true) {
        const result_list = await productListAPI({
            page: page.toString(),
            search_word: str,
        })('005')[0].then(result_list => {
            result_list.forEach(updateData);
            return result_list;
        });
        if (result_list.length < 55) {
            break;
        }
        page += 1;
    }
};
