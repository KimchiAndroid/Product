import { NextFunction, Request, Response, Router } from 'express';
import * as path from 'path';
import { callApp } from './callApp.service';
import { getData, updateData } from '../database/connect.service'

const productRouter = Router();

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title) {
        return res
            .status(200)
            .sendFile(path.join(__dirname, '../../views/product/productBase.html'));
    }
});

productRouter.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.title || typeof req.query.title !== 'string') {
        return res.send('Error!! There is no Query String');
    }
    const db_result: Array<Object> = await getData(req.query.title);   // title에 keyword 정보 있는 모든 행들 추출 -> Array<Object> 형태
    for (var i = 0; i < db_result.length; i++) {    //현 상태로는 6번 돌아야함. sitecode 총 6개이기 때문, site별 object로 array에 들어가있음.
        if(Object(db_result[i]).length < 10) {
            const result = await callApp({ search_word: req.query.title }); //사이트 별 db 저장된 개수가 10개 미만일 경우 그 사이트의 api를 호출, 인덱스는 i로 생각
            for (var j = 0; j < result.length; j++) { //정보 부족한 사이트 api 정보는 db에 저장/일단 모든 api 호출 행들 다 저장
                updateData(result[j]);
            }
            return res.status(200).json(result);
        }
    }
    return res.status(200).json(db_result);
});

export default productRouter;
