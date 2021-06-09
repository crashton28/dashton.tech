import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import { BREAKPOINTS } from '../../constants';
import useProgressiveImg from '../../hooks/useProgressiveImg';

const StyledSection = styled.div`
    align-items : stretch;
    background  : linear-gradient(to bottom, var(--colorPrimary), var(--colorPrimaryGrad));
    display     : flex;
`;

const Content = styled.div`
    align-items     : center;
    color           : #fff;
    display         : flex;
    flex            : 1 1 auto;
    font-size       : 4vw;
    justify-content : center;
    padding         : var(--contentMargin) 0;
    @media (min-width: ${BREAKPOINTS.LG[0]}) {
        font-size : 2vw;
        padding   : calc(var(--contentMargin) * 2) 0;
        position  : relative;
        &:before {
            background : linear-gradient(to bottom, var(--colorPrimary), var(--colorPrimaryGrad));
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

const BioImgWrapper = styled.div`
    display : none;
    @media (min-width: ${BREAKPOINTS.LG[0]}) {
        background : #fff;
        display    : block;
        overflow   : hidden;
        position   : relative;
        width      : 50%;
    }
`;

const BioImg = styled.img`
    @media (min-width: ${BREAKPOINTS.LG[0]}) {
        bottom     : 0;
        filter     : ${props => props.blur ? "blur(20px)" : "none"};
        height     : 100%;
        left       : 0;
        object-fit : cover;
        position   : absolute;
        right      : 0;
        top        : 0;
        transition : ${props => props.blur ? "none" : "filter 0.3s ease-out"};
        width      : 100%;
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
    const [src, { blur }] = useProgressiveImg(
        "https://res.cloudinary.com/crashton28/image/upload/v1623203472/dashton.tech/pics/biopic_loading_abmfkl.jpg",
        "https://res.cloudinary.com/crashton28/image/upload/v1623200508/dashton.tech/pics/biopic_2x_imneow.jpg"
    );
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
            <BioImgWrapper>
                <BioImg src={src} blur={blur} alt="Dave Ashton"/>
            </BioImgWrapper>
        </StyledSection>
    )
};

export default Lead;