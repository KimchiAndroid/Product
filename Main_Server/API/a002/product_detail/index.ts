import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
//import * as iconv from 'iconv-lite';

 const basesiteurl = 'https://m.cafe.naver.com/ArticleSearchList.nhn?';

  const product_detail = async (url : string ) => {
      console.log(url);
    const siteurl = await rp(url);
    const $ = cheerio.load(siteurl);
    const title = $('.product_name .blind').text();
    console.log(title);
};

  product_detail('https://m.cafe.naver.com/ca-fe/web/cafes/10050146/articles/704527668?menuid=383&query=%EB%AA%A8%EB%8B%88%ED%84%B0&art=aW50ZXJuYWwtY2FmZS1hcnRpY2xlLXJlYWQtaW5DYWZlLXNlYXJjaC1saXN0.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjcwNDUyNzY2OCwiaXNzdWVkQXQiOjE1ODA3OTQxNjAwMTQsImNhZmVJZCI6MTAwNTAxNDZ9.ZsF47tPkDj8NY1uecjGYjZbeJtpg0AGjbtRLkop_EAQ')
  .then(value => console.log(value))
.catch(err => console.log(err))
.finally(() => process.exit(0));