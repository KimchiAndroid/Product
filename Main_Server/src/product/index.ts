import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { productDetailAPI, productListAPI } from './callApp.service';
import { isAlreadyinDB, addFilterList } from './productFilter';
import { getData } from '../database/connect.service';

const productRouter = Router();

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res
            .status(200)
            .sendFile(path.join(__dirname, '../../views/product/productBase.html'));
    }
});

productRouter.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res.status(500).send('Error!! There is no Query String');
    }

    try {
        const page = req.query.page ?? '';
        const result = await productListAPI({ page, search_word: req.query.title })(
            req.query.site_code,
        )[0];
        return res.status(200).json(result);
    } catch (err) {
        throw new Error(err);
    }
});

// if (!(await isAlreadyinDB(req.query.title))) {
//     addFilterList(req.query.title);
// }
// return res
//     .status(200)
//     .json(await getData(req.query.title)(req.query.site_code)(req.query.page));

productRouter.get('/detail', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.id || typeof req.query.id !== 'string') {
        return res.status(500).send('Error!! There is no id');
    }
    if (!req.query.site_code || typeof req.query.site_code !== 'string') {
        return res.status(500).send('Error!! There is no site code');
    }
    try {
        const result = await productDetailAPI({ id: req.query.id, site_code: req.query.site_code });
        return res.status(200).json(result);
    } catch (err) {
        throw new Error(err);
    }
});

export default productRouter;
