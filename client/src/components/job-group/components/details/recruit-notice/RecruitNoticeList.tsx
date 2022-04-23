import React from 'react';
import style from '@styles/union.scss';
import RecruitNotice from '@components/job-group/components/details/recruit-notice/RecruitNotice';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';

export interface RecruitNoticeListProps {
    recruitNoticeList: RecruitNoticeInfo[];
}

const RecruitNoticeList = (props: RecruitNoticeListProps) => {
    const { recruitNoticeList } = props;

    return (
        <div className={style.job_type_list_wrap}>
            {recruitNoticeList.map((recruitNotice) => (
                <RecruitNotice key={recruitNotice.recruitNoticeUrl} recruitNotice={recruitNotice} />
            ))}
        </div>
    );
};

export default RecruitNoticeList;
