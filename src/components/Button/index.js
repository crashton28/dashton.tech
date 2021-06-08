import React from 'react';
import styled from '@emotion/styled';


const ButtonStyles = styled.a`
    border-radius   : 4px;
    border          : 1px solid var(--colorPrimary);
    color           : var(--colorPrimary);
    display         : inline-flex;
    margin          : 0 auto;
    text-decoration : none;
    padding         : .5rem 1rem;
    transition      : all .2s ease-in-out;
    &:hover {
        background      : var(--colorPrimary);
        color           : #fff;
    }
`;

const Button = (props) => {
    return <ButtonStyles {...props} />
}

export default Button;