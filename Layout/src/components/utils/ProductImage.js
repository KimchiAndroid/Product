import React, { Component } from "react"
import defaultImage from "../../static/default_photo.jpg"

class ImageComponent extends Component {
    render() {
        const { src, className } = this.props
        return (
            <img src={src || defaultImage} alt="nono" className={className} />
        )
    }
}

export default ImageComponent;