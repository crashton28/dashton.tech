import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactInfo from './components/ContactInfo';

const Wrapper = styled.div`
    font-family         : 'Lato', sans-serif;
    font-size           : 16px;
    font-weight         : 300;
    line-height         : 1.4;
    --contentMargin     : 40px;
`;

class App extends React.Component{
    render(){
        return(
            <Wrapper>
                <Header />
                <Experience />
                <Skills />
                <ContactInfo />
            </Wrapper>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));