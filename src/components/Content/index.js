import React from 'react';
import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../constants';

const Wrapper = styled.div`
    padding   : 0;
    margin    : 0 auto;
    max-width : 800px;
    @media (min-width : ${BREAKPOINTS.XL[0]}) {
        max-width : 56vw;
    }
`;

const Content = (props) => {
    return <Wrapper className={props.className}>{props.children}</Wrapper>;
}

export default Content;