import React from 'react';
import style from '@styles/union.scss';
import RecruitNoticeList from '@components/job-group/components/details/recruit-notice/RecruitNoticeList';
import { JobGroupInfo } from '@models/JobGroupInfo';

export interface JobGroupDetailsProps {
    jobGroup: JobGroupInfo;
}

const JobGroupDetails = (props: JobGroupDetailsProps) => {
    const { jobGroup } = props;
    const { name, recruitNoticeList } = jobGroup;

    return (
        <details className={style.jmf_job_list}>
            <summary className={style.job_type_title}>
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
