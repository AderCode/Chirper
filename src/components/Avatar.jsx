import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="avatar"
            src={require(`../srcImages/headshot-thumbnail.jpg`)}
            alt={this.props.name}
            style={{height: '50px', width: '50px'}}
            />
        )
    }
}

export default Avatar;