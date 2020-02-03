const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
const getHtml = async (keyword) => {
    try {
        return await axios.get(('http://www.daangn.com/search/').concat(encodeURIComponent(keyword)).concat('/more/flea_market?page=1'));
    } catch (error) { console.error(error); }
};

export const scrapSite = (keyword) => {
    return getHtml(keyword)
        .then(html => {
            let ulList = [];
            const $ = cheerio.load(html.data);
            const $bodyList = $('div.article-info');
            $bodyList.each(function (i, elem) {
                ulList[i] = {
                    ProductNum: i + 1,
                    Product: $(this)
                        .find('span.article-title')
                        .text(),
                    content: $(this)
                        .find('span.article-content')
                        .text().replace(/\n/g, ''),
                    location: $(this)
                        .find('p.article-region-name')
                        .text().trim(),
                    price: $(this)
                        .find('p.article-price')
                        .text().trim(),
                };
            });
            const data = ulList.filter(n => n.ProductNum);
            return data;
        })

}