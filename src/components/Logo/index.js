import React from 'react';
import styled from '@emotion/styled';
import LogoImage from '../../assets/logo-da.svg';

const LogoSVG = styled.svg`
    fill                : var(--colorPrimary);
    margin-right        : 10;
    height              : 40;
    width               : 40;
`;

const Logo = (props) => {
    return (
        <LogoSVG className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200">
            <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <path d="M220 200h-40L100 0h40l80 200zM0 0v40a60 60 0 010 120v40A100 100 0 000 0z"/>
            </g>
            </g>
        </LogoSVG>
    );
};

export default Logo;