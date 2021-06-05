import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import Nav from '../Nav';
import Content from '../Content';
import { BREAKPOINT } from '../../constants';

const Wrapper = styled.header`
    background      : #fff;
    border-bottom   : var(--border);
    padding         : 20 40;
    z-index         : 20;
`;

const StyledContent = styled(Content)`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
    max-width       : 100%;
    @media (max-width : ${BREAKPOINT[0]}) {
        flex-direction : column;
    }
`;

const LogoWrapper = styled.div`
    align-items : center;
    display     : flex;
    flex-wrap   : nowrap;
    @media (max-width : ${BREAKPOINT[0]}) {
        margin-bottom : 10;
    }
`;

const H1 = styled.h1`
    font-family    : 'Lato', sans-serif;
    font-weight    : 300;
    text-transform : uppercase;
    white-space    : nowrap;
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