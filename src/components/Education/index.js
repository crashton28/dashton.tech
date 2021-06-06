import React from 'react';
import styled from '@emotion/styled';
import Section from '../Section';
import Content from '../Content';
import Timeline from '../Timeline';
import MCTCLogo from '../../assets/experience/mcc.png';

const Education = () => {
    return (
        <Section name="education" title="Education">
            <Content>
                <Timeline
                    address     = "Manchester, CT"
                    company     = "Manchester Community Technical College"
                    dateEnd     = "1999-06-01"
                    description = "Spring 1999 graduate of MCTC with an associates degree in Graphic Design with a Multimedia Studies minor and a cumulative GPA of 3.435. (Dean’s List: Fall ’98, Spring ’99)."
                    logo        = {MCTCLogo}
                    title       = "Associate Degree: Graphic Design (Multimedia Studies)"
                />
            </Content>
        </Section>
    )
};

export default Education;