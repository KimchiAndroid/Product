import request from 'request-promise';
import { SiteResponseDetail } from './interfaces/SiteResponse.interface';

const hello = async (q: string, page: number = 1) => {
    const option = {
        uri: 'https://www.hellomarket.com/api/search/items',
        qs: {
            q,
            page,
        },
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        },
    };

    const res = await request(option);
    const parser = JSON.parse(res);

    const Product = parser.list.map((value: SiteResponseDetail) => {
        const item: ProductScrap = {
            siteName: 'HelloMarket',
            productName: value.item.title,
            price: value.item.property.price.amount,
            productLink: value.item.linkUrl,
            commentNum: value.item.count.comment,
            images: value.item.media.imageUrl,
        };

        return item;
    });

    return Product;
};

(async () => {
    console.log(await hello('아이폰'));
})();

//hello('맥북', 2).then(result => console.log(result));

interface ProductScrap {
    siteName: string;
    productName: string;
    price: number;
    images?: string;
    commentNum?: number;
    productLink: string;
}
