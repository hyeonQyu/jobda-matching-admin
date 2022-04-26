import React from 'react';
import style from '@styles/union.scss';
import RecruitNoticeList from '@components/job-group/components/details/recruit-notice/RecruitNoticeList';
import { JobGroupInfo } from '@models/JobGroupInfo';
import classNames from 'classnames';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';
import useNumberFormat from '@hooks/useNumberFormat';

export interface JobGroupDetailsProps {
    jobGroup: JobGroupInfo;
    index: number;
}

const JobGroupDetails = observer((props: JobGroupDetailsProps) => {
    const { jobGroup, index } = props;
    const { name, recruitNoticeList } = jobGroup;
    const { store } = useStore();
    const { isEditMode } = store;
    const isEmpty = recruitNoticeList.length === 0 && !isEditMode;
    const { withDigitLength } = useNumberFormat();

    return (
        <details className={style.jmf_job_list}>
            <summary className={classNames(style.job_type_title, isEmpty && style.empty)}>
                <span className={style.job_type} id={`job_type${withDigitLength(index, 2)}`}>
                    {name}
                </span>
                <span>({recruitNoticeList.length})</span>
            </summary>

            <RecruitNoticeList jobGroup={jobGroup} />
        </details>
    );
});

export default JobGroupDetails;
