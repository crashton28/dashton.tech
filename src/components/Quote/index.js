import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    background  : var(--colorPrimary);
    display         : flex;
    justify-content : center;
    padding         : var(--contentMargin);
`;

const Blockquote = styled.blockquote`
    color     : #fff;
    font-size : 2.4rem;
    display   : block;
    position  : relative;
    margin    : 0 var(--contentMargin);
    max-width : 800px;
    &:before, &:after {
        /* font-size   : 4rem; */
        font-family : 'Times New Roman', Times, serif;
    }
    &:before {
        content       : "“";
        /* margin-bottom : -4rem; */
        text-align    : left;
    }
    &:after {
        content       : "”";
        /* margin-bottom : -2rem;
        margin-top    : -2.4rem; */
        text-align    : right;
    }
    em {
        font-weight : 600;
    }
    span {
        display : block;
        font-size : .8em;
    }
`;

const Quote = () => {
    return (
        <Wrapper>
            <Blockquote cite="https://medium.com/@katherinemartinez/the-unicorn-hybrid-designer-developer-5e89607d5fe0">
                <em>The hybrid or designer-developer combo is the white unicorn of the internet world.</em>
                <span>Many believe they exist, some know someone who hired one, few claim they saw one in the past, always in strange circumstances.</span>
            </Blockquote>
        </Wrapper>
    )
};

export default Quote;