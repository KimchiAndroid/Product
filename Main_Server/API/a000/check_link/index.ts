import { requestService } from './src/request.service';

export const index = async () => {
    return requestService().then(value => value);
};
