import { index } from '.';

index({ search_word: '아이폰', page: '' })
    .then(value => console.log(value.length))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
