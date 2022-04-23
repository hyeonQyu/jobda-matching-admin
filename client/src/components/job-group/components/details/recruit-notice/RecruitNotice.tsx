import React from 'react';
import style from '@styles/union.scss';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import useDatetime from '@hooks/useDatetime';

export interface RecruitNoticeProps {
    recruitNotice: RecruitNoticeInfo;
}

const RecruitNotice = (props: RecruitNoticeProps) => {
    const { recruitNotice } = props;
    const { recruitSectorName, recruitNoticeUrl, companyName, job, location, registrationDatetime, title } = recruitNotice;
    const { datetimeFormat } = useDatetime({ datetime: registrationDatetime });

    return (
        <a href={recruitNoticeUrl} className={style.job_type_list_item} target={'_blank'}>
            <div className={style.job_type_item_wrap}>
                <div className={style.job_type_list_title}>
                    {title}
                    <span className={style.jmf_new_tag}>N</span>
                </div>

                <div className={style.job_type_type}>{job}</div>

                <div className={style.job_type_info}>
                    <span>{companyName}</span> <span>{recruitSectorName}</span> <span>{location}</span>
                </div>
            </div>

            <div className={style.job_type_date}>
                <span>등록일</span>
                <span>{datetimeFormat}</span>
            </div>
        </a>
    );
};

export default RecruitNotice;
