import React from 'react';
import styled from '@emotion/styled';
import Content from '../Content';
import Section from '../Section';
import LinkedInLogo from '../../assets/linkedin.svg';

const Wrapper = styled(Section)`
    align-items     : center;
    background      : var(--colorPrimary);
    color           : #fff;
    display         : flex;
    justify-content : center;
    padding         : 20 var(--contentMargin);
    position        : relative;
    z-index         : 0;
`;

const StyledContent = styled(Content)`
    align-items    : center;
    display        : flex;
    font-size       : 2rem;
    flex-direction: row;
    justify-content : center;
`;

const Link = styled.a`
    align-items     : center;
    color           : #fff;
    display         : flex;
    margin          : 0 4;
    text-decoration : none;
    text-transform: uppercase;
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
                {/* <Link href="mailto:me@dashton.tech">me@dashton.tech</Link> */}
                <Link href="https://www.linkedin.com/in/ashton-david" target="_blank" rel="noopener"><LinkedIn src={LinkedInLogo} alt="Linked In" loading="lazy" /></Link>
            </StyledContent>
        </Wrapper>
    )
}

export default ContactInfo;