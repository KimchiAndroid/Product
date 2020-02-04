import { index } from '.';

index({ search_word: '모니터' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
