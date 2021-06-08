import React from 'react';
import styled from '@emotion/styled';
import skillsData from "./skills-data";
import Section from '../Section';
import Content from '../Content';
import Button from '../Button';
import { BREAKPOINTS } from '../../constants';

const StyledContent = styled(Content)``;

const Category = styled.div`
    align-items     : center;
    border-radius   : 6px;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    width           : 100%;
    & + & {
        margin-top : var(--contentMargin);
    }
`;

const CategoryLabel = styled.div`
    align-items     : center;
    background      : var(--colorPrimary);
    border-radius   : 20px;
    color           : #fff;
    display         : flex;
    font-size       : 1rem;
    font-weight     : 600;
    height          : 24px;
    justify-content : center;
    margin          : 0 0 -12px;
    padding         : 0 20px;
    position        : relative;
    text-transform  : uppercase;
    @media (min-width : ${BREAKPOINTS.XL[0]}) {
        height: 2vw;
    }
`;

const CategorySkills = styled.div`
    border          : var(--border);
    border-radius   : 12px;
    display         : flex;
    flex-wrap       : wrap;
    justify-content : center;
    padding         : var(--contentMargin) var(--contentMargin) calc(var(--contentMargin) / 2);
    width           : 100%;
`;

const Skill = styled.div`
    align-items    : center;
    display        : flex;
    margin         : 0 10px calc(var(--contentMargin) / 2);
`;

const Logo = styled.img`
    height       : 20px;
    margin-right : 8px;
    object-fit   : contain;
    width        : 20px;
`;

const SkillLabel = styled.span`
    color : var(--colorSecondary);
`;

const Footer = styled.footer`
    margin-top : var(--contentMargin);
    text-align : center;
`;

const Skills = () => {
    return (
        <Section name="skills" title="Skills">
            <StyledContent>
            {skillsData.map((cat, idx) => {
                return (
                    <Category key={idx}>
                        <CategoryLabel>{cat.label}</CategoryLabel>
                        <CategorySkills>
                            {cat.items.map((skill, idx) => {
                                return(
                                    <Skill key={idx}>
                                        <Logo src={skill.logo} alt={skill.label} loading="lazy"/>
                                        <SkillLabel>{skill.label}</SkillLabel>
                                    </Skill>
                                );
                            })}
                        </CategorySkills>
                    </Category>
                )
            })}
            </StyledContent>
            <Footer><Button href="https://github.com/crashton28/dashton.tech" target="_blank" rel="noopener">View Portfolio on GitHub</Button></Footer>
        </Section>
    );
}

export default Skills;