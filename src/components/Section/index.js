import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../SectionTitle';

const Wrapper = styled.section`
    padding : var(--contentMargin);
    & + &:before {
        color      : rgba(0,0,0,.2);
        content    : '· · ·';
        display    : block;
        font-size  : 2rem;
        margin     : calc(var(--contentMargin) * -1) 0 calc(var(--contentMargin) / 2);
        text-align : center;
    }
`;

const InnerWrapper = styled.div`
    margin : 0 auto;
    width  : 100%;
`;

const Anchor = styled.a`
    position : relative;
    top : -120;
`;

const Section = (props) => {
    return(
        <Wrapper className={props.className}>
            <Anchor id={props.name} />
            {props.title && <SectionTitle name={props.name}>{props.title}</SectionTitle>}
            <InnerWrapper>
                {props.children}
            </InnerWrapper>
        </Wrapper>
    )
}

export default Section;