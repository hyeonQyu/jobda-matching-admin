import React from 'react';
import style from '@styles/union.scss';
import { JobGroupInfo } from '@models/JobGroupInfo';
import classNames from 'classnames';

export interface JobGroupCardProps {
    href: string;
    jobGroup: JobGroupInfo;
}

const JobGroupCard = (props: JobGroupCardProps) => {
    const { href, jobGroup } = props;
    const { recruitNoticeList, name } = jobGroup;
    const isEmpty = recruitNoticeList.length === 0;

    return (
        <a className={classNames(style.jmf_job_item, isEmpty && style.empty)} href={href}>
            <p>{name}</p>
            <p>({recruitNoticeList.length})</p>
        </a>
    );
};

export default JobGroupCard;
