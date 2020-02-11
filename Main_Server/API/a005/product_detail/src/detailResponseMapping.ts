import { DetailResponse } from '../../interfaces/DetailResponse.interface';
import { ProductDetailResponse } from '../../Common/action/product_detail/ProductDetailResponse.interface';

export const detailResponseMapping = (input: DetailResponse): ProductDetailResponse => ({
    id: input.data.linkUrl.split('/')[4],
    site_code: '005',
    origin_url: input.data.share.linkUrl,
    title: input.data.title,
    price: input.data.property.price.amount,
    date: setDate(input.data.timeago),
    image: input.data.images.map(value => value.imageUrl),
    detail: input.data.description,
    tags: {
        배송비: input.data.property.hasDeliveryFee == true ? '무료' : '별도',
        //location: input.data.property ? input.data.property.location.address : undefined,
        isDetailHtml: false,
        상품상태: sellState(input.data.property.sellState.code),
    },
});

const sellState = (input: string) => {
    if (input == 'NotUsed') return 'A';
    //새상품
    else if (input == 'AsNew') return 'B';
    //거의새것
    else return 'C'; //중고
};

const setDate = (input: string) => {
    //헬로마켓 날짜포맷 '20. 2. 6.'
    if (input.indexOf('.') !== -1) {
        const tmp = input.split('. ');
        if (tmp.length == 2) tmp.unshift('2020'); //헬로마켓 날짜포맷에서 2020년에 올라온 글은 연도가 나타나지 않기 때문에 포맷 맞추기 위해 2020 넣어줌
        tmp[tmp.length - 1] = tmp[tmp.length - 1].replace('.', '');
        const today = {
            year: Number.parseInt(tmp[0]),
            month: comp(Number.parseInt(tmp[1])),
            date: comp(Number.parseInt(tmp[2])),
        };
        const result = Object.values(today).join('-');
        return result;
    }
    //몇초전, 몇분전, 몇시간, 몇일전일 경우
    else {
        const date = new Date();
        const ago = Number.parseInt(input.split(input)[0]);

        if (input.indexOf('초') !== -1) date.setSeconds(date.getSeconds() - ago);
        else if (input.indexOf('분') !== -1) date.setMinutes(date.getMinutes() - ago);
        else if (input.indexOf('시간') !== -1) date.setHours(date.getHours() - ago);
        else if (input.indexOf('일') !== -1) date.setDate(date.getDate() - ago);

        const today = {
            year: date.getFullYear(),
            month: comp(date.getMonth() + 1),
            date: comp(date.getDate()),
        };
        const result = Object.values(today).join('-');
        return result;
    }
};

//월,일을 두자리수로 표현하기 위한 함수
const comp = (date: number) => {
    const result = date < 10 ? '0' + date : date;
    return result;
};
