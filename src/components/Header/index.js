import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';

const Wrapper = styled.header`
    align-items     : center;
    background      : #fff;
    border-bottom   : 1px rgba(0,0,0,.1) solid;
    /* box-shadow : 0 0 3px 3px rgba(0,0,0,.05); */
    display         : flex;
    justify-content : center;
    padding         : 20 0;
    /* position        : sticky; */
    /* top             : 0; */
    z-index         : 20;
`;

const H1 = styled.h1`
    font-family    : 'Lato', sans-serif;
    font-weight    : 300;
    text-transform : uppercase;
`;

function Header(props) {
    return (
        <Wrapper>
            <Logo />
            <H1>Dave Ashton</H1>
        </Wrapper>
    )
}

export default Header;