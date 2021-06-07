import React from 'react';
import styled from '@emotion/styled';
import BioPic from '../../assets/biopic@2x.jpg';
import Logo from '../Logo';
import { BREAKPOINT } from '../../constants';

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
    font-size       : 4vw;
    justify-content : center;
    padding          : var(--contentMargin) 0;
    @media (min-width: ${BREAKPOINT[1]}) {
        font-size : 2vw;
        position  : relative;
        &:before {
            background : var(--colorPrimary);
            bottom     : 0;
            content    : '';
            display    : block;
            opacity    : .3;
            position   : absolute;
            left       : 100%;
            top        : 0;
            width      : 5%;
            z-index    : 2;
        }
    }
`;

const Slogan = styled.div`
    font-size : 1.55em;
    span {
        display : block;
    }
`;

const BioImg = styled.img`
    display : none;
    @media (min-width: ${BREAKPOINT[1]}) {
        display    : block;
        object-fit : cover;
        position   : relative;
        width      : 50%;
        &:before {
            background : var(--colorPrimary);
            bottom     : 0;
            content    : '';
            left       : 10;
            position   : absolute;
            width      : 4;
            top        : 0;
        }
    }
`;

const StyledLogo = styled(Logo)`
    fill   : #fff;
    height       : 6em;
    margin-right : 1em;
    width        : 6em;
`;

const Name = styled.span`
    font-weight : 600;
`;

const Lead = () => {
    return (
        <StyledSection name="lead" title="Lead">
            <Content>
                <StyledLogo />
                <Slogan>
                    <span>Designer</span>
                    <span>Developer</span>
                    <Name>Dave Ashton</Name>
                </Slogan>
            </Content>
            <BioImg src={BioPic} alt="Dave Ashton"/>
        </StyledSection>
    )
}

export default Lead;