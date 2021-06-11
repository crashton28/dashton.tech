import React from 'react';
import styled from '@emotion/styled';
import Nav from '../Nav';
import Logo from '../Logo';

const Wrapper = styled.header`
    align-items     : stretch;
    background      : #fff;
    display         : flex;
    justify-content : space-between;;
    padding         : 0 2rem;
    z-index         : 20;
`;

const H1 = styled.h1`
    align-items    : center;
    color          : var(--colorSecondary);
    display        : flex;
    font-size      : 1.2rem;
    font-weight    : 400;
    padding        : .5rem 0;
    text-transform : uppercase;
`;

const StyledLogo = styled(Logo)`
    flex  : 0 0 auto;
    width : 1.2rem;
`;


const Header = () => {
    return (
        <Wrapper>
            <H1>
                <StyledLogo />
                <span>Dave Ashton</span>
            </H1>
            <Nav />
        </Wrapper>
    );
};

export default Header;
