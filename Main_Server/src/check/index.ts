import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { CheckLinkResponse } from '../../Common';
import * as a000 from '../../API/a000/check_link';
// var a001 = require('../../API/dist/a001/check_link');
// var a002 = require('../../API/dist/a002/check_link');
// var a003 = require('../../API/dist/a003/check_link');
// var a004 = require('../../API/dist/a004/check_link');
// var a005 = require('../../API/dist/a005/check_link');

const checkRouter = Router();

checkRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/check/check.html'));
});

checkRouter.get('/db', async (req: Request, res: Response, next: NextFunction) => {
    return res.send('db Success');
});

checkRouter.get('/a000', async (req: Request, res: Response, next: NextFunction) => {
    const result: CheckLinkResponse = await a000.index();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});

// checkRouter.get('/a001', async (req: Request, res: Response, next: NextFunction) => {
//     const result: CheckLinkResponse = await a001.index();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
// checkRouter.get('/a002', async (req: Request, res: Response, next: NextFunction) => {
//     const result: CheckLinkResponse = await a002.index();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
// checkRouter.get('/a003', async (req: Request, res: Response, next: NextFunction) => {
//     const result: CheckLinkResponse = await a003.index();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
// checkRouter.get('/a004', async (req: Request, res: Response, next: NextFunction) => {
//     const result: CheckLinkResponse = await a004.index();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });
// checkRouter.get('/a005', async (req: Request, res: Response, next: NextFunction) => {
//     const result: CheckLinkResponse = await a005.index();
//     if (result.isSuccess) {
//         return res.status(200).send('Successfully connected');
//     }
//     return res.status(500).send(result.error);
// });

export default checkRouter;
