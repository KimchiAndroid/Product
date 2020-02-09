import { index } from '.';

index({ id: '165531727' })
    .then(value => console.log(value))
    .catch(err => {
        throw new Error(err);
    })
    .finally(() => process.exit(0));

//2020-02-06 : 164839074
//2020-01-21 : 165395900
//2019-12-30 : 165148736
//2020-02-03 : 165531727
