const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
const getHtml = async () => {
    try {
        return await axios.get('http://www.daangn.com/search/%EB%85%B8%ED%8A%B8%EB%B6%81/more/flea_market?page=1');
    } catch (error) { console.error(error); }
};
getHtml()
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $('body > article');
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                ProductNum: i + 1,
                ProductName: $(this)
                    .find('span.article-title')
                    .text(),
                content: $(this)
                    .find('span.article-content')
                    .text().replace(/\n/g, ""),
                price: $(this)
                    .find('p.article-price')
                    .text().trim(),
                location: $(this)
                    .find('p.article-region-name')
                    .text().trim(),
                comment: $(this)
                    .find('span.article-comment')
                    .text().trim(),
                like: $(this)
                    .find('span.article-watch')
                    .text().trim(),
                url: ('https://daangn.com').concat($(this)
                    .find('article > a')
                    .attr('href')),
            };
        });
        const data = ulList.filter(n => n.ProductNum);
        return data;
    }).then(res => log(res));
