import React, { Component } from "react"
import "../style/ProductsContainer.scss"

class ProductsContainer extends Component {
    render() {
        const { children, main_flag } = this.props
        const classname = main_flag === true ? "main-products-container" : "products-container"
        return <div className={classname}>{children}</div>
    }
}

export default ProductsContainer