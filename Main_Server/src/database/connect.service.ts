import * as mysql from 'mysql';
import { mysql_account } from '../mysql_account';
import { ProductListResponse } from '../../Common/action/product_list/ProductListResponse.interface';
import { SiteCode } from '../../Common/site_code/SiteCode.type';

const connect = mysql.createConnection(mysql_account);
connect.connect();

// TODO : mysql pool 사용하기

export const getData = (keyWord: string) => async (siteCode?: SiteCode) => {
    const return_list: Array<Object> = [];

    if (!!siteCode) {
        try {
            const b = connect.query(
                'select * from product_list where title like ? and site_code = ?',
                ['%' + keyWord + '%', siteCode],
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    return_list.push(...data);
                },
            );
        } catch (err) {
            await connect.rollback();
            connect.release();
            console.log('Query Error!');
            return false;
        }
    }
    const a = connect.query(
        'select * from product_list where title like ?',
        ['%' + keyWord + '%'],
        (err, data) => {
            if (err) {
                throw err;
            }
            return_list.push(data);
        },
    );

    return return_list;
};

export const updateData = (keyword: ProductListResponse) => {
    connect.query(
        'insert into product_list(id, site_code, title, price, thumnail) values(?, ?, ?, ?, ?) where not exists (select title from product_list where title = ?)',
        [
            keyword.id,
            keyword.site_code,
            keyword.title,
            keyword.price,
            keyword.thumbnail,
            keyword.title,
        ],
        (err, data) => {
            if (err) {
                data = 'Fail';
                throw err;
            }
            data = 'Success';
            return data;
        },
    );
};
