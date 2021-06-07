import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.nav`
    background    : var(--colorSecondary);
    border-radius : 40px;
    display       : flex;
    left          : 50%;
    overflow      : hidden;
    padding       : 0 .5rem;
    position      : absolute;
    top           : 1rem;
    transform     : translateX(-50%);
    z-index       : 20;
`;

const NavLink = styled.a`
    color           : #fff;
    cursor          : pointer;
    font-weight     : 400;
    margin          : 0 1rem;
    padding         : .5rem 0;
    text-decoration : none;
    text-transform  : uppercase;
    &:hover {
        color : var(--colorPrimary);
    }
`;

const Nav = () => {
    return (
        <Wrapper>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </Wrapper>
    )
}

export default Nav;