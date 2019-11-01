import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    
    return (
        <nav>
            <Link to ='/'> home </Link>
            <Link to ='/signin'> Sign in</Link>
            <Link to ='/account'> Account </Link>
            <Link to ='/signin'> Sign Out  </Link>
        </nav>
    )
}

export default Navbar
