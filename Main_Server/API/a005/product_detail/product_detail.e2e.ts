import { index } from '.';

index({ id: '165502697' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
