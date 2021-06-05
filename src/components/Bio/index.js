import React from 'react';
import styled from '@emotion/styled';
import BioPic from '../../assets/biopic.jpg';
import Logo from '../Logo';

const StyledSection = styled.div`
    align-items : stretch;
    background  : var(--colorPrimary);
    display     : flex;
`;

const Content = styled.div`
    align-items     : center;
    color           : #fff;
    display         : flex;
    flex            : 1 1 auto;
    font-size       : 2rem;
    justify-content : center;
    margin          : var(--contentMargin);
`;

const Slogan = styled.div`
    span {
        display : block;
    }
`;

const BioImg = styled.img`
    object-fit : cover;
    width      : 30%;
`;

const StyledLogo = styled(Logo)`
    fill   : #fff;
    height : 120;
    margin : var(--contentMargin) var(--contentMargin) var(--contentMargin) 0;
    width  : 120;
`;

function Bio (props) {
    return (
        <StyledSection name="bio" title="Bio">
            <Content>
                <StyledLogo />
                <Slogan>
                    <span>Designer</span>
                    <span>Developer</span>
                    <span>Dave Ashton</span>
                </Slogan>
            </Content>
            <BioImg src={BioPic} />
        </StyledSection>
    )
}

export default Bio;