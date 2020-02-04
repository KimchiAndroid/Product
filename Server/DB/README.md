# DB 상 예정 Interface 
# DB 상의 상품 List 저장 Interface
interface ListResponse {
id: number; // db상의 id
site_code: SiteCode;
title: string;
price: number;
thumbnail?: string;
}

# Site에서 요청할 상품 정보 Interface
interface DetailResponse {
id: number; // db상의 id (auto_increment number)
site_code: SiteCode;
origin_url: string;
title: string; // 필수
price: number; // 필수(이지만 없는 사이트인 경우 추후 optional로 변경)
date?: string; // 없는 사이트도 있음 ex) 당근마켓
image?: string[];
detail: string; // 상품 상세 내용
tags: string[]; // 무료배송, 주소 정보 등 optional 할 수 있는 정보를 묶은 데이터
}
