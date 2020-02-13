import { index } from '.';

index({ id: '53104560' })
    .then(value => console.dir(value, { depth: null }))
    .catch(err => {
        throw new Error(err);
    });
