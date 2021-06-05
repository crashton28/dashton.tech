import React from 'react';
import styled from '@emotion/styled';
import skillsData from "./skills-data";
import Section from '../Section';
import Content from '../Content';

const Category = styled.div`
    align-items     : center;
    border-radius   : 6px;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    margin          : 0 0 20;
    width           : 100%;
`;

const StyledContent = styled(Content)``;

const CategoryLabel = styled.div`
    align-items     : center;
    background      : var(--colorPrimary);
    border-radius   : 20px;
    color           : #fff;
    display         : flex;
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
    padding         : 20 10 0;
    width           : 100%;
`;

const Skill = styled.div`
    align-items    : center;
    display        : flex;
    margin         : 0 10 20;
`;

const Logo = styled.img`
    height       : 20;
    margin-right : 8;
    width        : 20;
`;

const SkillLabel = styled.span`

`;

function Skills() {
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