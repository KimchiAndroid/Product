//?buyable=all&only_sellit=false&source_id=%EC%97%90%EC%96%B4%ED%8C%9F&type=search_v6&version=v4

// export const makeQuery = (source_id : string) => ({
//     buyable: 'all',
//     only_sellit: 'false',
//     source_id,
//     type: 'search_v6',
//     version: 'v4',
// })

const request = require('request');
const cheerio = require('cheerio');
request('https://www.withsellit.com/search?query=%EC%97%90%EC%96%B4%ED%8C%9F', function(
    error,
    response,
    body,
) {
    if (error) throw error;
    $ = cheerio.load(body);

    let json = [],
        sellerName,
        image,
        name,
        price;
    $('body > div.wide-container.ng-scope > div > div.gdidx-goods.row.ng-scope').each(function(
        index,
        ele,
    ) {
        sellerName = $(this)
            .find('.gdidx-seller-name')
            .text();
        image = $(this)
            .find('.gdidx-img')
            .image();
        name = $(this)
            .find('.gdidx-name')
            .text();
        price = $(this)
            .find('.gdidx-price')
            .text();
        json.push({ sellerName: sellerName, image: image, name: name, price: price });
    });

    console.log('json : ', json);
});
