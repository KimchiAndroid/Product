import { SiteResponseList } from './SiteResponse.interface';

export interface SiteRequest {
    /** q == keyword */
    q: string;
    stat_uid: string;
    version: string;
    page: string;
}
export interface parserFrame {
    list: SiteResponseList[];
}
