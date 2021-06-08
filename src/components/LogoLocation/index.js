import React from 'react';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../constants';

const Wrapper = styled.div`
    margin-bottom : 4px;
`;

const Logo = styled.img`
    height : 50px;
    @media (min-width : ${BREAKPOINTS.XL[0]}) {
        height : 3.5vw;
    }
`;

const LogoLocation = (props) => {
    return (
        <Wrapper>
            <Logo src={props.src} alt={props.alt} loading="lazy"/>
        </Wrapper>
    )
}

export default LogoLocation;