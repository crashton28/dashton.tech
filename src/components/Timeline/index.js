import React from 'react';
import styled from '@emotion/styled';
import Content from '../Content';
import orderBy from 'lodash/orderBy';
import LogoLocation from '../LogoLocation';
import { BREAKPOINTS } from '../../constants';
import Highlights from './Highlights';


const StyledContent = styled(Content)`
    padding-bottom : calc(var(--contentMargin) * 2);
    padding-left   : var(--contentMargin);
    position       : relative;
    z-index        : 1;
    @media (max-width: ${BREAKPOINTS.SM[1]}) {
        margin-left : calc(var(--contentMargin) * -1);
    }
    @media (min-width: ${BREAKPOINTS.LG[0]}) {
        border-left : var(--border);
        &:last-child {
            &:after {
                background : linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
                content    : '';
                display    : block;
                height     : 60;
                left       : -1;
                position   : absolute;
                bottom     : 0;
                width      : 1;
            }
        }
    }
    &:last-child {
        padding-bottom : 0;
    }
`;

const Location = styled.div`
    align-items: center;
    background      : rgba(255,255,255,.7);
    backdrop-filter : blur(2px);
    border-bottom   : var(--border);
    display         : flex;
    flex            : none;
    justify-content : space-between;
    padding         : calc(var(--contentMargin) / 2) 0;
    position        : sticky;
    top             : 0;
    z-index         : 2;
`;

const Company = styled.span`
    align-items     : center;
    display         : flex;
    font-size       : 1.2rem;
    font-weight     : 900;
    line-height     : 1.2;
    justify-content : flex-start;
    text-align      : left;
    @media all and (min-width: ${BREAKPOINTS.LG[0]} ) {
        justify-content : flex-end;
        text-align      : right;
    }
`;

const Address = styled.span`
    color : var(--colorSecondary);
`;

const Period = styled.div`
    align-items     : center;
    background      : var(--colorPrimary);
    color           : #fff;
    display         : inline-flex;
    font-size       : 1rem;
    height          : 24;
    justify-content : flex-end;
    padding         : 0 12 0 0;
    position        : relative;
    z-index         : 2;
    @media (max-width : ${BREAKPOINTS.SM[1]}) {
        border-radius : 0 20px 20px 0;
        margin-left   : calc(var(--contentMargin) * -1);
        padding-left  : var(--contentMargin);
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        border-radius   : 20px;
        margin-left     : calc((var(--contentMargin) + 12px) * -1);
        &:before {
            background    : #fff;
            border-radius : 50%;
            content       : '';
            height        : 11;
            margin        : 6 calc(var(--contentMargin) - 6px) 7 6;
            width         : 11;
        }
    }
    @media (min-width: ${BREAKPOINTS.XL[0]}) {
        height : 2vw;
        &:before {
            border-radius : 50%;
            height        : .7em;
            width         : .7em;
        }
    }
`;

const Date = styled.div`
      align-items    : center;
      display        : flex;
      text-transform : uppercase;
    & + &:before {
        content : '-';
        margin  : 0 4;
    }
`;

const Month = styled.span`
    margin-right   : 4;
`;

const Year = styled.span`
    font-weight : 700;
`;


const Title = styled.h2`
    color           : var(--colorHeading);
    display         : flex;
    flex-direction  : column;
    font-size       : 1.8rem;
    font-weight     : 600;
    justify-content : center;
    margin          : 20 0;
`;

const Description = styled.p`
    color     : var(--colorSecondary);
    font-size : 1.4rem;
    margin    : 0 0 var(--contentMargin);
`;

const Positions = styled.div`
    margin-top : 20;
`;

const Position = styled.div`
    display       : flex;
    flex-direction : column;
    flex-wrap     : nowrap;
    margin-bottom : var(--contentMargin);
    position      : relative;
    &:last-child {
        margin-bottom : 0;
    }
    @media (min-width : ${BREAKPOINTS.LG[0]}) {
        &:before {
            background    : var(--colorPrimary);
            border-radius : 50%;
            content       : '';
            display       : block;
            height        : 11;
            left          : calc((var(--contentMargin) + 6px) * -1);
            position      : absolute;
            top           : 6;
            width         : 11;
        }
    }
    @media (min-width: ${BREAKPOINTS.XL[0]}) {
        &:before {
            height : .7em;
            width  : .7em;
        }
    }
`;

const PositionPeriod = styled.span`
    font-weight  : 700;
    margin-right : 10;
`;
const PositionTitle = styled.div`

`;
const PositionDesc = styled.p`
    color         : var(--colorSecondary);
    margin-top    : 10;
    margin-bottom : 10;
`;

const getYear = (date) => {
    let newDate = new window.Date(date);
    return newDate.toLocaleString('en-us', { year: 'numeric' });
}
const getMonth = (date) => {
    let newDate = new window.Date(date);
    return newDate.toLocaleString('en-us', { month: 'short' });
}

const Timeline = (props) => {
    let dateStart        = props.dateStart,
        fromMonth        = dateStart && getMonth(dateStart),
        fromYear         = dateStart && getYear(dateStart),
        dateEnd          = props.dateEnd,
        toMonth          = dateEnd && getMonth(dateEnd),
        toYear           = dateEnd && getYear(dateEnd),
        positions        = props.positions,
        orderedPositions = positions && orderBy(positions, ['date.from'], ['desc','desc']);
    return (
        <StyledContent>
            <Period>
                {fromMonth ? (
                    <>
                        <Date>
                            <Month>{fromMonth}</Month>
                            <Year>{fromYear}</Year>
                        </Date>
                        <Date>
                            {toYear ? (
                                <>
                                    <Month>{toMonth}</Month>
                                    <Year>{toYear}</Year>
                                </>
                            ) : <Year>Today</Year>}
                        </Date>
                    </>
                ) : (
                    <Date>
                        <Month>Graduated</Month> <Year>{toYear}</Year>
                    </Date>
                )}
            </Period>
            <Location>
                <div>
                    <Company>{props.company}</Company>
                    <Address>{props.address}</Address>
                </div>
                {props.logo && <LogoLocation src={props.logo} alt={props.company} />}
            </Location>
            {props.title && <Title>{props.title}</Title>}
            {props.description && <Description>{props.description}</Description>}
            {props.highlights && <Highlights items={props.highlights} />}
            {positions && (
                <Positions>
                {orderedPositions.map((position, idx) => {
                    return (
                        <Position key={idx}>
                            <PositionPeriod>
                                {getYear(position.date.from)} - {position.date.to ? getYear(position.date.to) : 'TODAY'}
                            </PositionPeriod>
                            <div>
                                <PositionTitle>{position.title}</PositionTitle>
                                {position.description && <PositionDesc>{position.description}</PositionDesc>}
                                {position.highlights && <Highlights items={position.highlights} />}
                            </div>
                        </Position>
                    )
                })}
                </Positions>
            )}
        </StyledContent>
    )
};

export default Timeline;