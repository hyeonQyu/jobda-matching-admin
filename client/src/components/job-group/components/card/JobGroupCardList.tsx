import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import CharacterIcon from '@icons/CharacterIcon';
import JobGroupCard from '@components/job-group/components/card/JobGroupCard';
import { JobGroupInfo } from '@models/JobGroupInfo';
import useNumberFormat from '@hooks/useNumberFormat';

export interface JobGroupCardListProps {
    jobGroupList: JobGroupInfo[];
}

const JobGroupCardList = (props: JobGroupCardListProps) => {
    const { jobGroupList } = props;
    const { withDigitLength } = useNumberFormat();

    return (
        <div className={classNames(style.jmf_item_list_wrap, style.jmf_web)}>
            <CharacterIcon />
            {jobGroupList.map((jobGroup, index) => (
                <JobGroupCard href={`#job_type${withDigitLength(index, 2)}`} jobGroup={jobGroup} />
            ))}
        </div>
    );
};

export default JobGroupCardList;
