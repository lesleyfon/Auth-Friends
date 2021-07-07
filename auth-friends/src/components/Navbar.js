import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Navbar() {

    return (
        <Nav>
            <Link to ='/login'> Sign in</Link>
            <Link to ='/friends'> My Friends </Link>
            <Link to ='/addfriend'>Add a friend </Link>
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
        font-weight: bolder;
        text-transform: capitalize;
        font-size: 1.2rem;
        a{
            text-decoration: none;
            color: lightcoral
        }
`;