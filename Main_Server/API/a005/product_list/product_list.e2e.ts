import { index } from '.';

index({ search_word: '아이폰', page: '1' })
    .then(value => console.log())
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
