import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../SectionTitle';

const Wrapper = styled.section`
    padding : var(--contentMargin);
    &:last-child {
        border-bottom: none;
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

function Section(props) {
    return(
        <Wrapper className={props.className}>
            <Anchor id={props.name} />
            {/* {props.title && <SectionTitle name={props.name}>{props.title}</SectionTitle>} */}
            <InnerWrapper>
                {props.children}
            </InnerWrapper>
        </Wrapper>
    )
}

export default Section;