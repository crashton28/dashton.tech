import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../constants';

const Wrapper = styled.nav`
    display       : flex;
    overflow      : hidden;
    z-index       : 20;
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        background     : #333;
        bottom         : 0;
        flex-direction : column;
        left           : 100%;
        padding        : 0 0 var(--contentMargin) 0;
        position       : fixed;
        top            : 0;
        transform      : ${props => props.navOpen ? 'translateX(-100%)' : 'translateX(0)'};
        transition     : transform .2s ease-out;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        border  : none;
        display : flex;
    }
`;

const Icon = styled.svg`
    fill   : #000;
    height : 20px;
    width  : 20px;
`;

const ButtonOpen = styled.button`
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        align-items  : center;
        background   : none;
        border       : none;
        cursor       : pointer;
        color        : var(--colorSecondary);
        display      : flex;
        margin-right : -2rem;
        outline      : none;
        padding      : 1rem;
        z-index      : 20;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        display : none;
    }
`;
const ButtonClose = styled.button`
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        align-items    : center;
        background     : var(--colorPrimary);
        border         : none;
        color          : #fff;
        cursor       : pointer;
        display        : flex;
        font-size      : .8rem;
        line-height    : 1;
        margin-bottom  : var(--contentMargin);
        padding        : .5rem 1rem;
        text-transform : uppercase;
        outline        : none;
        svg {
            margin-right : 8px;
        }
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        display : none;
    }
`;

const NavLink = styled.a`
    align-items     : center;
    cursor          : pointer;
    display         : flex;
    font-weight     : 400;
    font-size       : .8rem;
    outline         : none;
    text-decoration : none;
    text-transform  : uppercase;
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        color   : #fff;
        padding : .5rem var(--contentMargin);
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        color       : var(--colorSecondary);
        margin-left : 1rem;
        padding     : .5rem 0;
        &:first-child {
            margin-left : 0;
        }
    }
    &:hover {
        color : var(--colorLink);
    }
`;

const Overlay = styled.div`
    background      : ${props => props.navOpen ?'rgba(0,0,0,.7)' : 'rgba(0,0,0,0)'};
    backdrop-filter : ${props => props.navOpen ? 'blur(2px)' : 'none'};
    bottom          : 0;
    left            : 0;
    pointer-events  : ${props => props.navOpen ? 'cursor' : 'none'};
    position        : fixed;
    right           : 0;
    top             : 0;
    z-index         : 10;
`;

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <ButtonOpen onClick={() => setNavOpen(true)}>
                <Icon xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512">
                    <defs/>
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
                </Icon>
            </ButtonOpen>
            <Overlay navOpen={navOpen} onClick={() => setNavOpen(false)}/>
            <Wrapper navOpen={navOpen}>
                <ButtonClose onClick={() => setNavOpen(false)}>
                    <Icon xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512">
                        <defs/>
                        <path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"/>
                    </Icon>
                    Close
                </ButtonClose>
                <NavLink href="#bio">Bio</NavLink>
                <NavLink href="#highlights">Highlights</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#education">Education</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Wrapper>
        </>
    )
};

export default Nav;