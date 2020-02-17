import { updateSingleWord } from '../database/updateDB';
import { isFilteredDB, insertFilter } from '../database/connect.service';

export const filter_str_list = ['아이폰', '모니터', '노트북', '마우스'];

export const isAlreadyinDB = async (keyword: string) => {
    const word_array = keyword.split(' ');
    const result = await Promise.all(
        word_array.map(word => {
            return isFilteredDB(word);
        }),
    );
    return !result.includes(false);
};

export const addFilterList = async (keyword: string) => {
    await insertFilter(keyword);
    await updateSingleWord(keyword);
};
