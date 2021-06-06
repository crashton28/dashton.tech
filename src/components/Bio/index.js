import React from 'react';
import styled from '@emotion/styled';
import Section from '../Section';
import Content from '../Content';

const StyledContent = styled(Content)`
    color     : var(--colorSecondary);
    font-size : 1.4rem;
    font-style : italic;
    em {
        font-weight : 600;
    }
`;

const Link = styled.a`
    color     : var(--colorLink);
    text-decoration : none;
    &:hover {
        text-decoration       : underline;;
        text-decoration-color : var(--colorLink);
        text-decoration-style : dotted;
    }
`;

const Hello = styled.h3`
    color       : var(--colorHeading);
    font-size   : 2rem;
    font-weight : 600;
`;

const Bio = () => {
    return (
        <Section name="bio">
            <StyledContent>
                <Hello>Hello, I'm Dave!</Hello>
                <p>I'm a <em>hybrid designer/developer</em> (<Link href="https://medium.com/@katherinemartinez/the-unicorn-hybrid-designer-developer-5e89607d5fe0" target="_blank">the unicorn does exist!</Link>) and I've built web apps for over 20 years.  I've seen the internet go from <Link href="http://textfiles.com/underconstruction/" target="_blank">construction sign gifs</Link> to <Link href="https://www.theverge.com/2020/6/30/21308071/google-search-augmented-reality-animals-dinosaurs-tyrannosaurus-rex-velociraptor-triceratops" target="_blank">augmented reality dinosaurs</Link>.</p>
                <p>Connecticut has been my home since the day I was born and I'm an avid fan of <Link href="https://www.nascar.com" target="_blank">NASCAR</Link>, the <Link href="https://www.patriots.com/" target="_blank">New England Patriots</Link> and in my spare time I enjoy spending time with my family and the occasional <Link href="https://www.iracing.com" target="_blank">sim race</Link>.</p>
            </StyledContent>
        </Section>
    )
};

export default Bio;