import { SiteResponseList } from './SiteResponse.interface';

export interface SiteRequest {
    /** q == keyword */
    q: string;
    stat_uid: string;
    version: string;
    page: string;
    n: number;
}
export interface parserFrame {
    list?: SiteResponseList[];
    num_found?: number;
}
