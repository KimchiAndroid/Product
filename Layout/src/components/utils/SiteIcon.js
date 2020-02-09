import React, { Component } from "react"
import cx from "classnames"
import "../../style/ImageComponent.scss"
class SiteIcon extends Component {
    selectSiteIcon = (site_code) => {
        switch (site_code) {
            case "000":
                return "Icon11st"
            case "001":
                return "IconBeongae"
            case "002":
                return "IconJoonggo"
            case "003":
                return "IconDanggeun"
            case "004":
                return "IconSellit"
            case "005":
                return "IconHelloMarket"
            case "main":
                return "IconMain"
            case "search":
                return "IconSearch"
            default:
                return ""
        }
    }
    render() {
        const { site_code } = this.props
        const siteIcon = this.selectSiteIcon(site_code)
        return (
            <>
                <div className={cx("icon", siteIcon)} alt="" />
            </>
        )
    }
}

export default SiteIcon;