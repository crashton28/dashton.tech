import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin-bottom      : 4;
`;

const Logo = styled.img`
    height : 50;
`;

const LogoLocation = (props) => {
    return (
        <Wrapper>
            <Logo src={props.src} />
        </Wrapper>
    )
}

export default LogoLocation;