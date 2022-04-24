import React from 'react';
import style from '@styles/union.scss';
import { JobGroupInfo } from '@models/JobGroupInfo';
import classNames from 'classnames';
import { useStore } from '@contexts/StoreContext';
import EditableJobGroupCard from '@components/common/editable-card/editable-job-group-card/EditableJobGroupCard';

export interface JobGroupCardProps {
    href: string;
    jobGroup: JobGroupInfo;
}

const JobGroupCard = (props: JobGroupCardProps) => {
    const { href, jobGroup } = props;
    const { recruitNoticeList, name } = jobGroup;
    const { store } = useStore();
    const { isEditMode } = store;
    const isEmpty = recruitNoticeList.length === 0;

    return isEditMode ? (
        <EditableJobGroupCard jobGroup={jobGroup} />
    ) : (
        <a className={classNames(style.jmf_job_item, isEmpty && style.empty)} href={href}>
            <p>{name}</p>
            <p>({recruitNoticeList.length})</p>
        </a>
    );
};

export default JobGroupCard;
