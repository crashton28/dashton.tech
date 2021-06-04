import React from 'react';
import styled from '@emotion/styled';

const NavLink = styled.a`
    color           : #999;
    font-weight     : 400;
    text-decoration : none;
    text-transform  : uppercase;
    &:hover {
        color : var(--colorPrimary);
    }
    & + & {
        margin-left : 20;
    }
`;

function Nav(props) {
    return (
        <nav>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </nav>
    )
}

export default Nav;