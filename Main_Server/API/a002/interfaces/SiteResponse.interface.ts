export interface SiteListResponse{
  "menuName":null,
  "seq": number;
  "userSeq": number;
  "title": string;
  "platformType": number;
  "productSectionType": number;
  "state": number;
  "url": string;
  "videoUrl": string;
  "mediatype": number;
  "price": number;
  "locations":[],
  "locationNames":[],
  "mainLocationName": string;
  "sortDate": string;
  "prodCondition": number;
  "isParcelFee": number;
  "fullPackageYn": number;
  "limitedEditionYn": number;
  "flawedYn": number;
  "consignmentType": number;
  "isConsignment": number;
  "cgSeq": string;
  "cgName": string;
  "viewCount": number;
  "reportYn": number;
  "transferYn": number;
  "productHiddenStatus": number;
  "tags": string;
  "copyHideYn": number;
  "totalCnt": number;
  "storeProfileUrl": string;
  "storeNickname": string;
  "certifiedDealer": number;
  "distance": number;
  "company": string;
  "articleUrl":null;
  "articleSeq":null;
  "articleBadgeShow": number;
  "userName": string;
  "ad": number;
  "adImpUrl": string;
  "adClickUrl":string;
  "adType": string;
  "productType": string;
}

export interface SiteResponse {
  ProductSearchResponse: {
    Request?: [
      {
        /** 매개 변수 */
        Arguments: [
          {
            Argument?: Array<{
              $: { name: string; value: string };
            }>;
          },
        ];
        /** 걸린 시간 */
        ProcessingTime?: [string];
      },
    ];
    Products?: [
      {
        /** 검색된 총 개수 */
        TotalCount?: [string];
        //Product?: SiteResponseDetail[];
      },
    ];
  };
}