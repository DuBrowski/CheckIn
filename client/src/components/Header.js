import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

class Header extends React.Component {

    render() {
        return (
            <div className="ui secondary pointing menu" style={{background: 'rgb(89,170,68)',
                background: 'linear-gradient(90deg, rgba(89,170,68,0.8802871490393032) 0%, rgba(88,170,68,0.6337885495995272) 100%)'}}>
                <Link to="/" className="item">Check In</Link>
                <div className="right menu">
                    <Link to="/" className="item">Board</Link>
                    <Link to="/board/create" className="item">Create Row</Link>
                    <GoogleAuth/> 
                </div>
            </div>
        );
    }
}

export default Header;