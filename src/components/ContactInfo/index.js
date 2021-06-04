import React from 'react';
import styled from '@emotion/styled';
import Content from '../Content';

const Wrapper = styled.div`
    align-items     : center;
    background      : tomato;
    color           : #fff;
    display         : flex;
    font-size       : 24;
    font-weight     : 400;
    justify-content : center;
    padding         : 20 var(--contentMargin);
    position        : relative;
    text-transform  : uppercase;
    z-index         : 0;
`;

const Link = styled.a`
    color           : #fff;
    font-weight     : 600;
    margin          : 0 4;
    text-decoration : none;
    &: hover {
        text-decoration : underline;
    }
`;

function ContactInfo(props) {
    return (
        <Wrapper>
            <Content>
                Find me on <Link href="https://www.linkedin.com/in/ashton-david" target="_blank">Linked In</Link>
            </Content>
        </Wrapper>
    )
}

export default ContactInfo;