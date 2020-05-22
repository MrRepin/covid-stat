import React from 'react'

class EmptyLayout extends React.Component {
    render() {
        return (
            <div className="emptyLayout" style={{height: '100vh'}}>
                {this.props.children}
            </div>
        )
    }
}

export default EmptyLayout