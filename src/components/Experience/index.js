import React from "react";
import styled from '@emotion/styled';
import jobsData from './experience-data';
import orderBy from 'lodash/orderBy';
import Section from '../Section';
import EmployerLogo from '../EmployerLogo';
import Content from '../Content';

const Job = styled.div`
    align-items : flex-start;
    display     : flex;
    position    : relative;
    &:last-child {
        margin-bottom : calc(var(--contentMargin) * -1);
    }
`;

const StyledContent = styled(Content)`
    align-items : flex-start;
    display     : flex;
    position    : relative;
    &:last-child {
        padding-bottom : 0;
        &:after {
            display : none;
        }
    }
`;

const Employer = styled.div`
    align-items: center;
    display         : flex;
    flex            : none;
    justify-content : space-between;
    margin          : 20 0;
`;

const EmployerName = styled.span`
    align-items     : center;
    display         : flex;
    font-size       : 1.2rem;
    font-weight     : 900;
    line-height     : 1.2;
    justify-content : flex-start;
    text-align      : left;
    @media all and (min-width: 800px ) {
        justify-content : flex-end;
        text-align      : right;
    }
`;

const EmployerLocation = styled.span`
    color : #666;
`;

const EmploymentPeriod = styled.div`
    background      : var(--colorPrimary);
    border-radius   : 20px;
    border          : 1px rgba(0,0,0,.05) solid;
    color           : #fff;
    display         : inline-flex;
    height          : 24;
    justify-content : flex-end;
    margin-left     : calc((var(--contentMargin) + 12px) * -1);
    padding         : 0 12 0 0;
    position        : relative;
    z-index         : 2;
    &:before {
        background    : #fff;
        border-radius : 10px;
        content       : '';
        height        : 10;
        margin        : 6 calc(var(--contentMargin) - 6px) 7 6;
        width         : 10;
    }
`;

const EmploymentDate = styled.div`
    text-transform : uppercase;
    & + &:before {
        content : '-';
        margin : 0 4;
    }
`;

const Month = styled.span`
    margin-right   : 4;
`;

const Year = styled.span`
    font-weight : 700;
`;

const Details = styled.div`
    border-left    : 1px solid rgba(0,0,0,.1);
    padding-bottom : 80;
    padding-left   : var(--contentMargin);
    position       : relative;
    z-index        : 1;
`;

const Title = styled.h2`
    display         : flex;
    flex-direction  : column;
    font-size       : 1.8rem;
    font-weight     : 300;
    justify-content : center;
    margin-bottom   : 20;
`;

const Description = styled.p`
    color : #666;
    margin : 0;
`;

const Positions = styled.div`
    margin-top : 20;
`;

const Position = styled.div`
    display       : flex;
    flex-wrap     : nowrap;
    margin-bottom : 10;
    position      : relative;
    &:last-child {
        margin-bottom : 0;
    }
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
`;

const PositionYear = styled.span`
    font-weight  : 700;
    margin-right : 10;
`;
const PositionTitle = styled.div`

`;
const PositionDesc = styled.p`
    color         : #666;
    margin-top    : 10;
    margin-bottom : 10;
`


function Experience() {
    let orderedJobs = orderBy(jobsData, ['date.from.year','date.from.month'], ['desc','desc']);
    return (
        <Section name="experience" title="Work History">
            {orderedJobs.map((job, idx) => {
                let date             = job.date,
                    fromDate         = new Date(`${date.from.year}, ${date.from.month}, 01`),
                    fromMonth        = fromDate.toLocaleString('en-us', { month: 'short' }),
                    fromYear         = fromDate.toLocaleString('en-us', { year: 'numeric' }),
                    toDate           = new Date(`${date.to.year}, ${date.to.month}, 01`),
                    toMonth          = toDate.toLocaleString('en-us', { month: 'short' }),
                    toYear           = toDate.toLocaleString('en-us', { year: 'numeric' }),
                    employer         = job.employer,
                    positions        = job.positions,
                    orderedPositions = positions && orderBy(positions, ['date.from.year','date.from.month'], ['desc','desc']);

                return (
                    <Job key={idx}>
                        <StyledContent>
                            <Details>
                                <EmploymentPeriod>
                                    <EmploymentDate>
                                        <Month>{fromMonth}</Month>
                                        <Year>{fromYear}</Year>
                                    </EmploymentDate>
                                    <EmploymentDate>
                                        {date.to.year ? (
                                            <>
                                                <Month>{toMonth}</Month>
                                                <Year>{toYear}</Year>
                                            </>
                                        ) : <Year>Today</Year>}
                                    </EmploymentDate>
                                </EmploymentPeriod>
                                <Employer>
                                    <div>
                                        <EmployerName>{employer.name}</EmployerName>
                                        <EmployerLocation>{employer.location}</EmployerLocation>
                                    </div>
                                    <EmployerLogo src={employer.logo} />
                                </Employer>
                                <Title>
                                    {job.title}
                                </Title>
                                <Description>{job.description}</Description>
                                {positions && (
                                    <Positions>
                                    {orderedPositions.map((position, idx) => {
                                        return (
                                            <Position key={idx}>
                                                <PositionYear>{position.date.from.year}</PositionYear>
                                                <div>
                                                    <PositionTitle>{position.title}</PositionTitle>
                                                    {position.description && <PositionDesc>{position.description}</PositionDesc>}
                                                </div>
                                            </Position>
                                        )
                                    })}
                                    </Positions>
                                )}
                            </Details>
                        </StyledContent>
                    </Job>
                );
            })}
        </Section>
    );
}

export default Experience;
