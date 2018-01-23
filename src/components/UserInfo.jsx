import React, { Component } from 'react';
import Avatar from './Avatar';

class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Aderhold',
        }
    }
    
    
    render() {
        return (
            <div>
                <Avatar />
                <div>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default UserInfo;