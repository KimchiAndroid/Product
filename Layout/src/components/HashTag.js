import React, { Component } from 'react';

class HashTag extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className="hashTag">{data || 'Empty'}</div>
            </>
        );
    }
}

export default HashTag;
