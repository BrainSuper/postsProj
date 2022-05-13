import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <span><Link to={'/about'}>About</Link></span>
            <span><Link to={'/posts'}>Posts</Link></span>
        </div>
    );
};

export default Navbar;