import React from 'react';
import style from '@styles/union.scss';
import { JobGroupDetailsProps } from '@components/job-group/components/details/JobGroupDetails';
import RecruitNotice from '@components/job-group/components/details/recruit-notice/RecruitNotice';

export interface RecruitNoticeListProps extends Pick<JobGroupDetailsProps, 'recruitNoticeList'> {}

const RecruitNoticeList = (props: RecruitNoticeListProps) => {
    const { recruitNoticeList } = props;

    return (
        <div className={style.job_type_list_wrap}>
            {recruitNoticeList.map((recruitNotice) => (
                <RecruitNotice recruitNotice={recruitNotice} />
            ))}
        </div>
    );
};

export default RecruitNoticeList;
