import React from 'react';
import styled from '@emotion/styled';

const UL = styled.ul`
    color        : var(--colorSecondary);
    padding-left : 20px;
    margin       : var(--contentMargin) 0 0;
`;
const LI = styled.li`
    & + & {
        margin-top: calc(var(--contentMargin) / 2);
    }
`;

const Highlights = (props) => {
    let highlights = props.items,
        highlightsRender = [];

    for (let i = 0; i < highlights.length; i++) {
        highlightsRender.push(
            <LI key={i} dangerouslySetInnerHTML={{__html: highlights[i]}} />
        );
    }

    return highlightsRender.length > 0 && <UL>{highlightsRender}</UL>;
};

export default Highlights;