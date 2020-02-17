import { Response, Router } from 'express';
import * as path from 'path';
import { index as a000 } from '../../API/a000/check_link';
import { index as a001 } from '../../API/a001/check_connection';
// import { index as a002 } from '../../API/a002/check_link';
import { index as a003 } from '../../API/a003/check_connection';
// import { index as a004 } from '../../API/a004/check_link';
import { index as a005 } from '../../API/a005/check_connection';
import { CheckLinkResponse } from '../../Common';

const checkRouter = Router();

checkRouter.get('/', (_, res: Response) => {
    res.sendFile(path.join(__dirname, '../../views/check/check.html'));
});

checkRouter.get('/db', async (_, res: Response) => {
    return res.send('db Success');
});

checkRouter.get('/a000', async (_, res: Response) => {
    const result: CheckLinkResponse = await a000();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});

checkRouter.get('/a001', async (_, res: Response) => {
    const result: CheckLinkResponse = await a001();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});
// checkRouter.get('/a002', async (_, res: Response) => {
//     const result: CheckLinkResponse = await a002();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
checkRouter.get('/a003', async (_, res: Response) => {
    const result: CheckLinkResponse = await a003();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});
// checkRouter.get('/a004', async (_, res: Response) => {
//     const result: CheckLinkResponse = await a004();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
checkRouter.get('/a005', async (_, res: Response) => {
    const result: CheckLinkResponse = await a005();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});

export default checkRouter;
