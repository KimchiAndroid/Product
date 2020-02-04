import React, { Component } from "react"
import "../style/Header.scss"

class Header extends Component {
    render() {
        const { children, container } = this.props
        return <div className={container}>{children}</div>
    }
}

export default Header