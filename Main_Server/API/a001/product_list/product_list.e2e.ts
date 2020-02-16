import { index } from '.';

index({ search_word: '안경안경', page: '' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
