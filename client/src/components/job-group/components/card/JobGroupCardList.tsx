import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import CharacterIcon from '@icons/CharacterIcon';
import JobGroupCard from '@components/job-group/components/card/JobGroupCard';
import useNumberFormat from '@hooks/useNumberFormat';
import { observer } from 'mobx-react';
import { useStore } from '@contexts/StoreContext';

const JobGroupCardList = observer(() => {
    const { jobGroupList } = useStore();
    const { withDigitLength } = useNumberFormat();

    return (
        <div className={classNames(style.jmf_item_list_wrap, style.jmf_web)}>
            <CharacterIcon />
            {jobGroupList.map((jobGroup, index) => (
                <JobGroupCard href={`#job_type${withDigitLength(index, 2)}`} jobGroup={jobGroup} key={jobGroup.name} />
            ))}
        </div>
    );
});

export default JobGroupCardList;
