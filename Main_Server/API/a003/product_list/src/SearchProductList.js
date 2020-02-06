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
            const $bodyList = $('body > article');
            $bodyList.each(function (i, elem) {
                ulList[i] = {
                    ProductNum: i + 1,
                    ProductName: $(this).find('span.article-title').text(),
                    ProductPrice: $(this).find('p.article-price').text().trim(),
                    ProductImage: $(this).find('div.card-photo').find('img').attr('src'),
                    Content: $(this).find('span.article-content').text().replace(/\n/g, ''),
                    PageUrl: ('https://daangn.com').concat($(this).find('article > a').attr('href')),
                    SellerLocation: $(this).find('p.article-region-name').text().trim(),
                    Productlike: $(this).find('span.article-watch').text().trim(),
                    ReviewCount: $(this).find('span.article-comment').text().trim(),
                };
            });
            const data = ulList.map(ul => {
                return {
                    id: ul.ProductNum,
                    site_code: '003',
                    title: ul.ProductName,
                    price: ul.ProductPrice,
                    thumbnail: ul.PageUrl,
                }
            });
            // const data = ulList.filter(n => n.ProductNum);
            return data;
        })

}

