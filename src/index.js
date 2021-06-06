import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Lead from './components/Lead';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactInfo from './components/ContactInfo';

const Wrapper = styled.div`
    font-family      : 'Lato', sans-serif;
    font-size        : 16px;
    font-weight      : 300;
    line-height      : 1.4;
    --colorHeading   : #FF665A;
    --colorPrimary   : #FF665A;
    --colorSecondary : #7D6B7D;
    --colorLink      : cornflowerblue;
    --contentMargin  : 40px;
    --border         : 1px dotted rgba(0,0,0,.2);
`;

const App = () => {
    return(
        <Wrapper>
            <Lead />
            <Bio />
            <Experience />
            <Education />
            <Skills />
            <ContactInfo />
        </Wrapper>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));