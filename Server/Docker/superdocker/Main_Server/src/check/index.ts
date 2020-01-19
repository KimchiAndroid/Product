import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { CheckLinkResponse } from '../../Common';
var elevenst = require('../../API/dist/a000/check_link');

const checkRouter = Router();

checkRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../../views/check/check.html'));
});

checkRouter.get('/db', async (req: Request, res: Response, next: NextFunction) => {
    return res.send('db Success');
});

checkRouter.get('/11st', async (req: Request, res: Response, next: NextFunction) => {
    const result: CheckLinkResponse = await elevenst.index();
    if (result.isSuccess) {
        return res.status(200).send('Successfully connected');
    }
    return res.status(500).send(result.error);
});

checkRouter.get('/joongna', (req: Request, res: Response, next: NextFunction) => {
    res.send('joongna Success');
});

export default checkRouter;
