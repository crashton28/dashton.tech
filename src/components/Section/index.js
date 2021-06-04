import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../SectionTitle';

const Wrapper = styled.section`
    border-bottom : 1px rgba(0,0,0,.1) solid;
    padding-top   : var(--contentMargin);
    &:nth-child(odd) {
        background : rgba(0,0,0,.02);
    }
    &:last-child {
        border-bottom: none;
    }
`;

const Content = styled.div`
    margin    : 0 auto;
    padding   : 0 var(--contentMargin) var(--contentMargin);
    width     : 100%;
`;

function Section(props) {
    return(
        <Wrapper>
            <SectionTitle>{props.title}</SectionTitle>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}

export default Section;