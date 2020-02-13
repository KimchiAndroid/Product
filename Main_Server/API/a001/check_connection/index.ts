import { requestService } from './src/request.service';

export const index = async () => {
    return requestService()
        .then(value => value)
        .catch(err => {
            throw new Error(err);
        });
};
