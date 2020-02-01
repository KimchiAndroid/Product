import * as mysql from 'mysql';
import { mysql_account } from '../mysql_account';
import { ProductListResponse } from '../../Common/action/product_list/ProductListResponse.interface';
import { SiteCode } from '../../Common/site_code/SiteCode.type';

const connect = mysql.createConnection(mysql_account);
connect.connect();

export const getData = async (keyWord: string) => {
    return new Promise((resolve, reject) => {
        const queryResult: Array<Object> = [];
        for (var k = 0; k < 6; k++) {
            const a = connect.query("select * from product_list where name like ? and site = ?", ['%' + keyWord + '%', '00' + k], (err, data) => {
                if (err) {
                    reject(err);
                }
                queryResult.push(data);
            });
        }
        resolve(queryResult);
    });
};

export const updateData = (keyword: ProductListResponse) => {
    connect.query('insert into product_list(id, site_code, title, price, thumnail) values(?, ?, ?, ?, ?)', [keyword.id, keyword.site_code, keyword.title, keyword.price, keyword.thumbnail], (err, data) => {
        if (err) {
            data = 'Fail';
            throw err;
        }
        data = 'Success';
        return data;
    });
};

export const removeData = () => {};
