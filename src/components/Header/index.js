import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import Nav from '../Nav';
import Content from '../Content';

const Wrapper = styled.header`
    background      : #fff;
    border-bottom   : 1px rgba(0,0,0,.1) solid;
    box-shadow : 0 0 3px 3px rgba(0,0,0,.05);
    padding         : 20 40;
    position        : sticky;
    top             : 0;
    z-index         : 20;
`;

const StyledContent = styled(Content)`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
`;

const LogoWrapper = styled.div`
    align-items : center;
    display     : flex;
`;

const H1 = styled.h1`
    font-family    : 'Lato', sans-serif;
    font-weight    : 300;
    text-transform : uppercase;
`;

function Header(props) {
    return (
        <Wrapper>
            <StyledContent>
                <LogoWrapper>
                    <Logo />
                    <H1>Dave Ashton</H1>
                </LogoWrapper>
                <Nav />
            </StyledContent>
        </Wrapper>
    )
}

export default Header;