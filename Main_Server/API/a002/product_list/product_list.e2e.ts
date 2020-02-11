import { index } from '.';

index({ search_word: '모니터', page: '1' })
    .then(value => console.log(value))
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));