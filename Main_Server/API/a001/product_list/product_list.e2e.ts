import { index } from '.';

index({ search_word: '모니터', page: '0' })
    .then(value => console.log(value, value.length))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
