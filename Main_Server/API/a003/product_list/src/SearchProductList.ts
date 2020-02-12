import { ProductListRequest } from '../../Common/action/product_list';
import { ProductList } from './ProductList.interface';

const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async (search_word: string, page: string) => {
    try {
        const result: any[] = [];
        const startpage = parseInt(page) - 1;
        for (let i = startpage; i < startpage + 4; i++) {
            result.push(await axios.get(('http://www.daangn.com/search/').concat(encodeURIComponent(search_word)).concat(`/more/flea_market?page=${i + 1}`)))
        }
        return result;
    } catch (error) { console.error(error); }
};

export const scrapSite = ({ search_word, page }: ProductListRequest) => {
    return getHtml(search_word, page)
        .then(html_list => {
            let prNumber = 1;
            return html_list.map(html => {
                let ulList: ProductList[] = [];
                const $ = cheerio.load(html.data);
                const $bodyList = $('body > article');
                $bodyList.each(function (i: number, elem: string) {
                    ulList[i] = {
                        ProductNum: prNumber++,
                        ProductName: $(this).find('span.article-title').text(),
                        ProductPrice: $(this).find('p.article-price').text().trim(),
                        ProductImage: $(this).find('div.card-photo').find('img').attr('src'),
                        Content: $(this).find('span.article-content').text().replace(/\n/g, ''),
                        PageUrl: ('https://daangn.com').concat($(this).find('article > a').attr('href')),
                        SellersLocation: $(this).find('p.article-region-name').text().trim(),
                        ProductLike: $(this).find('span.article-watch').text().trim(),
                        ReviewCount: $(this).find('span.article-comment').text().trim(),
                    };
                });
                return ulList;
            })
        })
}