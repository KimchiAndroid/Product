import React, { Component } from "react"
import ProductImage from "./utils/ProductImage"
import HashTag from "./HashTag"
import SiteTitle from "./utils/SiteTitle"

import "../style/ProductContents.scss"

class ProductContents extends Component {
    render() {
        const { site_code, title, price, origin_url, detail, location, shipPrice } = this.props.data
        return (
            <>
                <div className="productMain">
                    <ProductImage src="" className="productDetailImage" />
                    <div className="productMainDetail">
                        <SiteTitle site_code={site_code}></SiteTitle>
                        <div className="title">{title}</div>
                        <div className="price">{price} 원</div>
                        <a href={origin_url} className="originUrl">바로가기</a>
                    </div>
                </div>
                <div className="etcDetail">
                    <HashTag data={location} />
                    <HashTag data={shipPrice} />
                </div>
                <div className="detail" id="detail" dangerouslySetInnerHTML={{ __html: detail }}></div>
            </>
        )
    }
}

export default ProductContents;
