import { index } from '.';

index({ search_word: '지갑', page: '0' })
    .then(value => console.log(value, value.length))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));

// 60 60 60 60 60 60

// 50 10+50 10+50 10+50
