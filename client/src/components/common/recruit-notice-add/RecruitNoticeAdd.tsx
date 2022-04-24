import React from 'react';
import { observer } from 'mobx-react';
import style from './RecruitNoticeAdd.scss';
import { useStore } from '@contexts/StoreContext';

export interface RecruitNoticeAddProps {
    jobGroupName: string;
}

const RecruitNoticeAdd = observer((props: RecruitNoticeAddProps) => {
    const { jobGroupName } = props;
    const { jobGroupEditStore } = useStore();
    const { startEditRecruitNotice } = jobGroupEditStore;

    return <div className={style.wrapper} onClick={() => startEditRecruitNotice(jobGroupName)} />;
});

export default RecruitNoticeAdd;
