import React from "react";
import jobsData from './experience-data';
import orderBy from 'lodash/orderBy';
import Section from '../Section';
import Timeline from '../Timeline';


const Experience = () => {
    let orderedJobs = orderBy(jobsData, ['date.from'], ['desc','desc']);
    return (
        <Section name="experience" title="Experience">
            {orderedJobs.map((job, idx) => {
                let date             = job.date,
                    employer         = job.employer,
                    positions        = job.positions;

                return (
                    <Timeline
                        dateStart   = {date.from}
                        dateEnd     = {date.to}
                        address     = {employer.location}
                        company     = {employer.name}
                        description = {job.description}
                        highlights  = {job.highlights}
                        logo        = {employer.logo}
                        positions   = {positions}
                        title       = {job.title}
                        key         = {idx}
                    />
                );
            })}
        </Section>
    );
}

export default Experience;
