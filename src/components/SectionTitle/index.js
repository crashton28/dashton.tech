import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
    margin : 0 0 var(--contentMargin);
`;

const H2 = styled.h2`
    color          : var(--colorSecondary);
    font-size      : 1.8rem;
    font-weight    : 400;
    line-height    : 1;
    text-align     : center;
    text-transform : uppercase;
`;

const SectionTitle = (props) => {
    return (
        <Header>
            <H2>{props.children}</H2>
        </Header>
    )
}

export default SectionTitle;