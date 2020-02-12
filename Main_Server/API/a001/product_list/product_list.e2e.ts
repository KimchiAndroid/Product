import { index } from '.';

index({ search_word: '에어팟', page: '2' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
