import React from 'react';
import styled from '@emotion/styled';
import skillsData from "./skills-data";
import Section from '../Section';
import Content from '../Content';

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
    height          : 24;
    line-height     : 1;
    justify-content : center;
    margin          : 0 0 -12;
    padding         : 0 12;
    position        : relative;
    text-transform  : uppercase;
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
    margin         : 0 10 calc(var(--contentMargin) / 2);
`;

const Logo = styled.img`
    height       : 20;
    margin-right : 8;
    object-fit   : contain;
    width        : 20;
`;

const SkillLabel = styled.span`
    color : var(--colorSecondary);
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
                                        <Logo src={skill.logo}/>
                                        <SkillLabel>{skill.label}</SkillLabel>
                                    </Skill>
                                );
                            })}
                        </CategorySkills>
                    </Category>
                )
            })}
            </StyledContent>
        </Section>
    );
}

export default Skills;