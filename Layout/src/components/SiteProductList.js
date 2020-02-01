import React, { Component } from "react"
import ProductListItem from "./ProductListItem"
import axios from "axios"
import "../style/SiteProductList.scss"
import debounce from "lodash/debounce"

class SiteProductList extends Component {
    constructor(props) {
        super(props)
        const { main_flag } = this.props
        this.state = {
            res: []
        }
        this.getProducts(main_flag)
        if (!main_flag) {
            window.addEventListener("scroll", debounce(this.handleRequestScroll, 1000))
        }
    }
    getProducts = async (main_flag) => {
        let res = ""
        if (main_flag) {
            res = await axios.get("http://127.0.0.1:3002/Products/main")
        } else {
            res = await axios.get("http://127.0.0.1:3002/Products/all")
        }
        this.setState({ res: [...this.state.res, ...res.data] })
    }
    handleRequestScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.getProducts()
        }
    }
    render() {
        const productItem = Object.values(this.state.res).map((item, index) => {
            const { productImage, productName, productPrice, productID } = item;
            return (
                <ProductListItem key={index} productImage={productImage} productName={productName} productPrice={productPrice} productID={productID}></ProductListItem>
            )
        });
        return (
            <div className="site-product-list">
                <div className="product-list-container">
                    {productItem}
                </div>
            </div>
        )
    }
}

export default SiteProductList;