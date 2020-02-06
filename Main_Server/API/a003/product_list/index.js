import { scrapSite } from './product_list/src/SearchProductList';

scrapSite('노트북')
    .then(value => console.log(value))
    .catch(err => console.log(err))
    .finally(() => process.exit(0));
