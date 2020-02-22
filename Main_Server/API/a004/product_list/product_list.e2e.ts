import { index } from './';

index({ page: '1', search_word: '모니터' })
    .then(value => console.log(value))
    .catch(err => console.error(err));
