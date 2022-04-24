import React from 'react';
import style from '@styles/union.scss';
import RecruitNoticeList from '@components/job-group/components/details/recruit-notice/RecruitNoticeList';
import { JobGroupInfo } from '@models/JobGroupInfo';
import classNames from 'classnames';

export interface JobGroupDetailsProps {
    jobGroup: JobGroupInfo;
}

const JobGroupDetails = (props: JobGroupDetailsProps) => {
    const { jobGroup } = props;
    const { name, recruitNoticeList } = jobGroup;
    const isEmpty = recruitNoticeList.length === 0;

    return (
        <details className={style.jmf_job_list}>
            <summary className={classNames(style.job_type_title, isEmpty && style.empty)}>
                <span className={style.job_type} id={'job_type01'}>
                    {name}
                </span>
                <span>({recruitNoticeList.length})</span>
            </summary>

            <RecruitNoticeList recruitNoticeList={recruitNoticeList} />
        </details>
    );
};

export default JobGroupDetails;
