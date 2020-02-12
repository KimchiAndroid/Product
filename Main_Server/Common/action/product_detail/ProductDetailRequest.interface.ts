import { SiteCode } from '../../site_code';

export interface ProductDetailRequest {
    /** id */
    id: string;
    /** site code */
    site_code?: SiteCode;
}
