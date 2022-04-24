import React from 'react';
import JobGroupDetails from '@components/job-group/components/details/JobGroupDetails';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';

const JobGroupDetailsList = observer(() => {
    const { store } = useStore();
    const { jobGroupList } = store;

    return (
        <div>
            {jobGroupList.map((jobGroup) => (
                <JobGroupDetails jobGroup={jobGroup} key={jobGroup.name} />
            ))}
        </div>
    );
});

export default JobGroupDetailsList;
