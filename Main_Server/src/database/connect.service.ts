import { ProductListResponse } from '../../Common/action/product_list/ProductListResponse.interface';
import { SiteCode } from '../../Common/site_code/SiteCode.type';
import { connect } from '../index';

export const getData = (keyWord: string) => (siteCode: SiteCode) => async (page: string) => {
    // 50개 제한 걸려있어야함 page 수에 따라 나눠지는 거 필요함
    return new Promise<ProductListResponse[]>(resolve => {
        connect.query(
            'select * from products where title like ? and site_code = ? Limit ?, ?',
            ['%' + keyWord + '%', siteCode, (parseInt(page) - 1) * 50, parseInt(page) * 50],
            (err, data) => {
                if (err) {
                    throw err;
                }
                resolve(data.map((d: Object) => Object.assign({}, d)));
            },
        );
    });
};

export const isFilteredDB = (keyword: string) => {
    return new Promise<boolean>(resolve => {
        connect.query(
            'select * from keyword where keyword like ?',
            ['%' + keyword + '%'],
            (err, data) => {
                if (err) {
                    throw err;
                }
                if (!data || data.length === 0) {
                    return resolve(false);
                }
                return resolve(true);
            },
        );
    });
};

export const insertFilter = (keyword: string) => {
    return new Promise(resolve => {
        connect.query('insert into keyword values( ? )', [keyword], (err, data) => {
            if (err) {
                data = 'Fail';
                throw err;
            }
            data = 'Success';
            resolve();
        });
    });
};

export const updateData = (keyword: ProductListResponse) => {
    connect.query(
        'insert into products values(?, ?, ?, ?, ?, ?) on duplicate key \
        update price = ?, isSelling = ?',
        [
            keyword.id,
            keyword.site_code,
            keyword.title,
            keyword.price,
            keyword.thumbnail,
            keyword.isSelling,
            keyword.price,
            keyword.isSelling,
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
