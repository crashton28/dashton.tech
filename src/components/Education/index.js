import React from 'react';
import Section from '../Section';
import Content from '../Content';
import Timeline from '../Timeline';

const Education = () => {
    return (
        <Section name="education" title="Education">
            <Content>
                <Timeline
                    address     = "Manchester, CT"
                    company     = "Manchester Community Technical College"
                    dateEnd     = "1999-06-01"
                    description = "Spring 1999 graduate of MCTC with an associates degree in Graphic Design with a Multimedia Studies minor and a cumulative GPA of 3.435."
                    highlights  = {[
                        "Dean’s List: Fall ’98, Spring ’99",
                    ]}
                    logo        = "https://res.cloudinary.com/crashton28/image/upload/v1623200443/dashton.tech/logos/mcc_oi3u7d.png"
                    title       = "Associate Degree: Graphic Design (Multimedia Studies)"
                />
            </Content>
        </Section>
    )
};

export default Education;