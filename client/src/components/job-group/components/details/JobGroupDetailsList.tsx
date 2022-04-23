import React from 'react';
import JobGroupDetails from '@components/job-group/components/details/JobGroupDetails';
import { JobGroupInfo } from '@models/JobGroupInfo';

export interface JobGroupDetailsListProps {
    jobGroupList: JobGroupInfo[];
}

const JobGroupDetailsList = (props: JobGroupDetailsListProps) => {
    const { jobGroupList } = props;

    return (
        <div>
            {jobGroupList.map((jobGroup) => (
                <JobGroupDetails jobGroup={jobGroup} />
            ))}
        </div>
    );
};

export default JobGroupDetailsList;
