import React, { Component } from 'react';
import SiteIcon from "./SiteIcon"
import "../../style/SiteTitle.scss"
class SiteTitle extends Component {
    selectSiteIcon = (site_code) => {
        switch (site_code) {
            case "000":
                return "11번가"
            case "001":
                return "번개장터"
            case "002":
                return "중고나라"
            case "003":
                return "당근마켓"
            case "004":
                return "셀잇"
            case "005":
                return "헬로마켓"
            default:
                return ""
        }
    }

    render() {
        const { site_code } = this.props
        const site_title = this.selectSiteIcon(site_code)
        return (
            <>
                <div className="site-title">
                    <SiteIcon site_code={site_code}></SiteIcon>
                    <div className="title">{site_title}</div>
                </div>
            </>
        )

    }
}

export default SiteTitle;