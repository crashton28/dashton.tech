import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    padding : 0;
    margin : 0 auto;
    max-width: 800;
`;

function Content(props) {
    return <Wrapper className={props.className}>{props.children}</Wrapper>;
}

export default Content;