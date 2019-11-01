import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Navbar() {

    return (
        <Nav>
            <Link to ='/'> home </Link>
            <Link to ='/signin'> Sign in</Link>
            <Link to ='/account'> Account </Link>
            <Link to ='/signin'> Sign Out  </Link>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
        width: 760px;
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        padding: 20px;
        /* text-decoration: none; */
        font-weight: bolder;
        text-transform: capitalize;
        font-size: 1.2rem;
        a{
            text-decoration: none;
            color: lightcoral
        }
`;