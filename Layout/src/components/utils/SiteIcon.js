import React, { Component } from "react"
import cx from "classnames"
import "../../style/ImageComponent.scss"
class SiteIcon extends Component {
    constructor(props) {
        super(props)
        const { site_code } = this.props
        this.siteIcon = this.selectSiteIcon(site_code)
    }
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
            default:
                return "IconKonkuk"
        }
    }
    render() {
        return (
            <>
                <img className={cx("icon", this.siteIcon)} alt="" />
            </>
        )
    }
}

export default SiteIcon;