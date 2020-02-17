import { index } from '.';

index({ search_word: '노트북', page: '1' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
