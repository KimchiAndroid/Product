import { Product } from './SearchProduct.interface';

const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
const getHtml = async (id: string) => {
    try {
        return await axios.get(('http://www.daangn.com/articles/').concat(id));
    } catch (error) { console.error(error); }
};

export const scrapProduct = (id: string) => {
    return getHtml(id)
        .then(html => {
            let ulList: Product[] = [];
            const $ = cheerio.load(html.data);
            const $bodyList = $('#content');
            const thumbnail: string[] = [];

            $bodyList.each(function (i: number, elem: string) {
                ulList[i] = {
                    id: $(this).find('#image-slider > div > div').attr('data-article-id'),
                    site_code: '003',
                    origin_url: ('https://www.daangn.com/articles/').concat(id),
                    title: $(this).find('h1').text(),
                    price: $(this).find('#article-price').text().trim(),
                    // thumbnail: thumbnail,
                    image: $(this).find('div.slider-wrap > div > a > div > div').find('img').attr('data-lazy'),
                    detail: $(this).find('#article-detail > p').text().replace(/\n/g, ''),
                };
            });
            return ulList;
        })
}