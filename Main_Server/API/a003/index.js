import { scrapSite } from './src/SearchProduct';

scrapSite('노트북')
    .then(value => console.log(value))
    .catch(err => console.log(err))
    .finally(() => process.exit(0));
