import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>OUR WEBSITE {this.props.currentUser ? "LOGOUT" : <Link to='/login'>LOGIN</Link>} <Link to='/secret'>SECRET</Link></div>
        )
    }
}

export default Navbar;