import React from 'react';
import styled from '@emotion/styled';
import Section from '../Section';
import Content from '../Content';
import { BREAKPOINTS } from '../../constants';

const StyledContent = styled(Content)`
    color      : var(--colorSecondary);
    font-size  : 1.4rem;
    font-style : italic;
    em {
        font-weight : 600;
    }
    p {
        margin : calc(var(--contentMargin) / 2) 0 0;
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
    align-items     : center;
    color           : var(--colorHeading);
    display         : flex;
    font-size       : 1.8rem;
    font-weight     : 600;
    line-height     : 1.2;
    span {
        display      : inline-block;
        margin-right : .2rem;
        white-space  : nowrap;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        font-size : 2.4rem;
    }
`;

const Pic = styled.img`
    display : none;
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        border-radius : 2rem;
        border        : 1px solid rgba(0,0,0,.1);
        display       : block;
        height        : 4rem;
        margin-right  : 1rem;
        object-fit    : cover;
        width         : 4rem;
    }
`;

const Bio = () => {
    return (
        <Section name="bio">
            <StyledContent>
                <Hello>
                    <Pic src="https://res.cloudinary.com/crashton28/image/upload/v1623200502/dashton.tech/pics/biopic-avatar_2x_ehwsd5.jpg"/>
                    <div>
                        <span>Hello, </span><span>I'm Dave!</span>
                    </div>
                </Hello>
                <p>I'm a <em>hybrid designer/developer</em> (<Link href="https://medium.com/@katherinemartinez/the-unicorn-hybrid-designer-developer-5e89607d5fe0" target="_blank" rel="noopener">the unicorn does exist!</Link>) and I've built web apps for over 20 years.  I've seen the internet go from <Link href="http://textfiles.com/underconstruction/" target="_blank" rel="noopener">construction sign gifs</Link> to <Link href="https://www.theverge.com/2020/6/30/21308071/google-search-augmented-reality-animals-dinosaurs-tyrannosaurus-rex-velociraptor-triceratops" target="_blank" rel="noopener">augmented reality dinosaurs</Link>.</p>
                <p>Connecticut has been my home since the day I was born and I'm an avid fan of <Link href="https://www.nascar.com" target="_blank" rel="noopener">NASCAR</Link>, the <Link href="https://www.patriots.com/" target="_blank" rel="noopener">New England Patriots</Link> and in my spare time I enjoy spending time with my family and the occasional <Link href="https://www.iracing.com" target="_blank" rel="noopener">sim race</Link>.</p>
            </StyledContent>
        </Section>
    )
};

export default Bio;