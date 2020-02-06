import { SiteResponseList } from './SiteResponse.interface';

export interface SiteRequest {
    keyWord: string;
    stat_uid: string;
    version: string;
    /** page는 일단 임의로 1이라고 지정해 두기. 나중에 바꾸면 된다. */
    page: number;
}
export interface parserFrame {
    list: SiteResponseList[];
}
