import { DetailResponse } from '../../interfaces/DetailResponse.interface';
import { ProductDetailResponse } from '../../Common/action/product_detail/ProductDetailResponse.interface';

export const detailResponseMapping = (input: DetailResponse): ProductDetailResponse => ({
    id: Number.parseInt(input.data.linkUrl.split('/')[4]),
    site_code: '005',
    origin_url: input.data.share.linkUrl,
    title: input.data.title,
    price: input.data.property.price.amount,
    //date: input.data.timeago,
    date: setDate(input.data.timeago),
    image: input.data.images.map(value => value.imageUrl),
    detail: input.data.description,
    tags: {
        //location: input.data.property.location.address,
        delivery: input.data.property.hasDeliveryFee == true ? '배송비있음' : '무료배송',
    },
});

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
    //몇일전, 몇분전, 몇시간전일 경우
    else {
        const date = new Date();
        const minute = parsing('분');
        const hour = parsing('시간');
        const day = parsing('일');

        date.getHours() - hour;
        date.getMinutes() - minute;

        const today = {
            year: date.getFullYear(),
            month: comp(date.getMonth() + 1),
            date: comp(date.getDate() - day), //몇일전일 경우 숫자로 바꿔서 오늘 날짜에서 빼줌
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

const parsing = (input: string) => {
    const result = input.indexOf(input) !== -1 ? Number.parseInt(input.split(input)[0]) : 0;
    return result;
};
