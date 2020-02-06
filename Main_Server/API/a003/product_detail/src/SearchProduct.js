const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
const getHtml = async (keyword) => {
    try {
        return await axios.get(('http://www.daangn.com/search/').concat(encodeURIComponent(keyword)).concat('/more/flea_market?page=1'));
    } catch (error) { console.error(error); }
};

export const scrapSite = (async () => {
    const html = await getHtml();

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

    const scrapProduct = ulList.map(data => {
        return new Promise(async function (resolve, reject) {
            const response = await axios.get(data.url);
            let product = [];
            const $ = cheerio.load(response.data);
            const $bodylist = $('#content');
            $bodyList.each(function (i, elem) {
                product[i] = {
                    id: $(this).find('#image-slider > div > div').attr('data-article-id'),
                    site_code: '003',
                    title: $(this).find('h1').text(),
                    price: $(this).find('#article-price').text(),
                    thumbnail: $(this).find('#slick-slide00 > div > a > div > div > img').attr('src'),
                }
            });
            resolve(product);
        });
    });
    console.log(await Promise.all(scrapProduct));
})();


