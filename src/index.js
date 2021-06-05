import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Quote from './components/Quote';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';

const Wrapper = styled.div`
    font-family     : 'Lato', sans-serif;
    font-size       : 16px;
    font-weight     : 300;
    line-height     : 1.4;
    --colorPrimary  : tomato;
    --contentMargin : 40px;
    --border        : 1px dotted rgba(0,0,0,.2);
`;

const App = (props) => {
    const [activeNav, setActiveNav] = useState();
    return(
        <Wrapper>
            <Header activeNav={activeNav}/>
            {/* <Quote /> */}
            <Bio />
            <Experience />
            <Skills />
            <ContactInfo />
        </Wrapper>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));