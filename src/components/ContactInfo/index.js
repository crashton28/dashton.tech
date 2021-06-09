import React from 'react';
import styled from '@emotion/styled';
import Content from '../Content';
import Section from '../Section';

const Wrapper = styled(Section)`
    align-items     : center;
    background      : linear-gradient(to bottom, var(--colorPrimary), #E85B51);
    color           : #fff;
    display         : flex;
    justify-content : center;
    padding         : 20px var(--contentMargin);
    position        : relative;
    z-index         : 0;
`;

const StyledContent = styled(Content)`
    align-items     : center;
    display         : flex;
    font-size       : 2rem;
    flex-direction  : row;
    justify-content : center;
`;

const Link = styled.a`
    align-items     : center;
    color           : #fff;
    display         : flex;
    margin          : 0 4px;
    text-decoration : none;
    text-transform  : uppercase;
    &:hover {
        text-decoration : underline;
    }
`;

const LinkedIn = styled.img`
    height : 1em;
`;


const ContactInfo = () => {
    return (
        <Wrapper name="contact">
            <StyledContent>
                <Link href="https://www.linkedin.com/in/ashton-david" target="_blank" rel="noopener"><LinkedIn src="https://res.cloudinary.com/crashton28/image/upload/v1623201778/dashton.tech/logos/linkedin_sklrqo.svg" alt="Linked In" loading="lazy" /></Link>
            </StyledContent>
        </Wrapper>
    )
}

export default ContactInfo;