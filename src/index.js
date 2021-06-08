import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { BREAKPOINTS } from './constants';
import Bio from './components/Bio';
import ContactInfo from './components/ContactInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Lead from './components/Lead';
import Skills from './components/Skills';

const App = () => {
    return(
        <>
            <Global
                styles={css`
                    html {
                        --colorHeading      : #FF665A;
                        --colorPrimary      : #FF665A;
                        --colorSecondary    : #7D6B7D;
                        --colorSecondaryAlt : #36BEB0;
                        --colorLink         : cornflowerblue;
                        --contentMargin     : 40px;
                        --border            : 1px dotted rgba(0,0,0,.2);
                        font-family         : 'Lato', sans-serif;
                        font-size           : 1.2rem;
                        font-weight         : 300;
                        line-height         : 1.4;
                    }
                    @media (min-width : ${BREAKPOINTS.XL[0]}) {
                        html {
                            --contentMargin : 3.5vw;
                            font-size       : 1.3vw;
                        }
                    }
                `}
            />
            <Lead />
            <Bio />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <ContactInfo />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));