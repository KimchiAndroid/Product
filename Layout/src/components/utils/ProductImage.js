import React, { Component } from "react"
import defaultImage from "../../static/default_photo.jpg"

class ImageComponent extends Component {
    state = {
        mainImage: this.props.images[0],
        images: []
    }
    changeMainImage = (image) => {
        this.setState({
            mainImage: image
        })
    }

    render() {
        const { images, className } = this.props

        return (
            <div className="imageContainer" >
                <img src={this.state.mainImage || defaultImage} alt="nono" className={className} />
                <div className="imageListContainer">
                    {
                        images.map((image, index) => {
                            return (
                                <img src={image} key={index} className="moreImage" alt="no" onClick={() => this.changeMainImage(image)} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ImageComponent;