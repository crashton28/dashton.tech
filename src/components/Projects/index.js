import React from 'react';
import styled from '@emotion/styled';
import projectsData from './projects-data';
import Section from '../Section';
import Content from '../Content';
import { BREAKPOINT } from '../../constants';

const StyledContent = styled(Content)`
    margin : 0 calc(var(--contentMargin) * -1);
    @media (min-width : ${BREAKPOINT[1]}) {
        max-width : none;
        width : 100vw;
    }
`;
const Project = styled.section`
    align-items     : center;
    display         : flex;
    justify-content : space-between;;
    overflow        : hidden;
    padding         : var(--contentMargin);
    &:nth-of-type(odd) {
        background : #333;
        color      : #fff;
        h2 {
            color : var(--colorPrimary);
        }
    }
    &:nth-of-type(even) {
        background     : var(--colorPrimary);
        color          : #fff;
        @media (min-width : ${BREAKPOINT[1]}) {
            flex-direction : row-reverse;
        }
    }
    @media (max-width : ${BREAKPOINT[0]}) {
        flex-direction: column-reverse;
    }
`;

const Screen = styled.img`
    border-radius   : 4px;
    box-shadow      : 0 0 20px 10px rgba(0,0,0,.1);
    flex            : 0 0 auto;
    object-fit      : contain;
    overflow        : hidden;

    @media (max-width : ${BREAKPOINT[0]}) {
        width : 100%;
    }
    @media (min-width : ${BREAKPOINT[1]}) {
        width : 30vw;
    }
`;

const Details = styled.div`
    flex   : 0 1 auto;
    margin : 0;

    @media (max-width : ${BREAKPOINT[0]}) {
        margin-top : var(--contentMargin);
        width      : 100%;
    }
    @media (min-width : ${BREAKPOINT[1]}) {
        width  : calc(70vw - (var(--contentMargin) * 3));
    }
`;

const Title = styled.h2`
    font-size   : 2rem;
    font-weight : 600;
`;

const Role = styled.div`
    font-size  : 1.4rem;
`;

const Description = styled.p`
    margin-bottom : 0;
    opacity       : .8;
`;

const Projects = () => {
    return (
        <Section name="Projects" title="Highlights">
            <StyledContent>
                {projectsData.map((project, idx) => {
                    return (
                        <Project key={idx}>
                            <Details>
                                <Title>{project.title}</Title>
                                <Role>{project.role}</Role>
                                {project.description && <Description>{project.description}</Description>}
                            </Details>
                            <Screen src={project.screens[0].image} />
                        </Project>
                    )
                })}
            </StyledContent>
        </Section>
    );
};

export default Projects;