import React from 'react';
import JobGroupDetails from '@components/job-group/components/details/JobGroupDetails';
import { useStore } from '@contexts/StoreContext';

const JobGroupDetailsList = () => {
    const { jobGroupList } = useStore();

    return (
        <div>
            {jobGroupList.map((jobGroup) => (
                <JobGroupDetails jobGroup={jobGroup} key={jobGroup.name} />
            ))}
        </div>
    );
};

export default JobGroupDetailsList;
