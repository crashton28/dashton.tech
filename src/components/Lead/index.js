import React from 'react';
import styled from '@emotion/styled';
import BioPic from '../../assets/biopic.jpg';
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
    font-size       : 1.4rem;
    justify-content : center;
    padding          : var(--contentMargin);
    @media (min-width: 440px) {
        font-size : 2rem;
    }
    @media (min-width: ${BREAKPOINT[1]}) {
        position   : relative;
        &:before, &:after {
            background : var(--colorPrimary);
            bottom     : 0;
            content    : '';
            display    : block;
            opacity    : .3;
            position   : absolute;
            right      : -20;
            top        : 0;
            width      : 20;
            z-index    : 2;
        }
    }
`;

const Slogan = styled.div`
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
        width      : 30%;
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
    height : 90;
    margin : 0 1.4rem 0 0;
    width  : 90;
    @media (min-width: 440px) {
        height : 120;
        width  : 120;
    }
`;

const Lead = () => {
    return (
        <StyledSection name="lead" title="Lead">
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

export default Lead;