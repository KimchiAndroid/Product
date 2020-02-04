import { index } from '.';

index({ id: '2103167376' })
    .then(value => console.dir(value, { depth: null }))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));
