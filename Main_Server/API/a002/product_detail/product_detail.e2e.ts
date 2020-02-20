import { index } from '.';

index({ id: '19411280' })
    .then(value => console.log(value))
    .catch(err => {
        console.log(err);
        throw new Error(err);
    })
    .finally(() => process.exit(0));
