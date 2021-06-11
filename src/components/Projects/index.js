import React from 'react';
import styled from '@emotion/styled';
import projectsData from './projects-data';
import Section from '../Section';
import Content from '../Content';
import { BREAKPOINTS } from '../../constants';

const Project = styled.section`
    margin  : 0 calc(var(--contentMargin) * -1);
    padding : var(--contentMargin);
    h2 {
        color : var(--colorPrimary);
    }
    &:nth-of-type(odd) {
        background : linear-gradient(to bottom, #333, #292929);
        color      : #fff;
    }
    &:nth-of-type(even) {
        background     : linear-gradient(to bottom, rgb(0, 0, 0,0), rgba(0, 0, 0, 0.05));
        & img, & video {
            box-shadow      : 0 0 8px 4px rgba(0,0,0,.03);
        }
        @media (min-width : ${BREAKPOINTS.LG[0]}) {
            & > div {
                flex-direction : row-reverse;
            }
        }
    }
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        & > div {
            flex-direction: column-reverse;
        }
    }
`;

const StyledContent = styled(Content)`
    align-items     : center;
    display         : flex;
    justify-content : space-between;
`;

const Screen = styled.img`
    border-radius   : 4px;
    box-shadow      : 0 0 8px 4px rgba(0,0,0,.1);
    flex            : 0 0 auto;
    object-fit      : contain;
    overflow        : hidden;

    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        width : 100%;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        width : 40%;
    }
`;

const Video = styled.video`
    border-radius   : 4px;
    box-shadow      : 0 0 8px 4px rgba(0,0,0,.1);
    flex            : 0 0 auto;
    object-fit      : contain;
    overflow        : hidden;

    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        width : 100%;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        width : 40%;
    }
`;

const Details = styled.div`
    flex   : 0 1 auto;
    margin : 0;

    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        margin-top : var(--contentMargin);
        width      : 100%;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        width  : calc(60% - var(--contentMargin));
    }
`;

const Title = styled.h2`
    font-size   : 2rem;
    font-weight : 600;
`;

const Role = styled.div`
    font-size : 1.4rem;
`;

const Description = styled.p`
    margin-bottom : 0;
    opacity       : .8;
`;

const Projects = () => {
    return (
        <Section name="highlights" title="Highlights">
                {projectsData.map((project, idx) => {
                    return (
                        <Project key={idx}>
                            <StyledContent>
                                <Details>
                                    <Title>{project.title}</Title>
                                    <Role>{project.role}</Role>
                                    {project.description && <Description>{project.description}</Description>}
                                </Details>
                                {project.video && (
                                    <Video autoPlay loop muted playsInline>
                                        <source src={project.video.webm} type="video/webm" />
                                        <source src={project.video.mp4} type="video/mp4" />
                                    </Video>
                                )}
                                {project.screens && <Screen src={project.screens[0].image} alt={project.screens[0].label} loading="lazy" />}
                            </StyledContent>
                        </Project>
                    )
                })}
        </Section>
    );
};

export default Projects;