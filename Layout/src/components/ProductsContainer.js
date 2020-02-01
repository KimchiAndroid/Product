import React, { Component } from "react"
import "../style/ProductsContainer.scss"

class ProductsContainer extends Component {
    render() {
        const { children } = this.props
        return <div className="products-container">{children}</div>
    }
}

export default ProductsContainer