import React, {Component} from 'react';
import NavBar from '../comonents/NavBar'

class NavContainer extends Component {
    render() {
        return (
            <NavBar {...this.props}/>
        )
    }
}

export default NavContainer
