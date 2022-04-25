import React from 'react';
import style from '@styles/union.scss';
import RecruitNotice from '@components/job-group/components/details/recruit-notice/RecruitNotice';
import { useStore } from '@contexts/StoreContext';
import RecruitNoticeAdd from '@components/common/recruit-notice-add/RecruitNoticeAdd';
import { JobGroupInfo } from '@models/JobGroupInfo';
import { observer } from 'mobx-react';
import RecruitNoticeAddForm from '@components/common/recruit-notice-add-form/RecruitNoticeAddForm';
import { Droppable } from 'react-beautiful-dnd';

export interface RecruitNoticeListProps {
    jobGroup: JobGroupInfo;
}

const RecruitNoticeList = observer((props: RecruitNoticeListProps) => {
    const { jobGroup } = props;
    const { recruitNoticeList, name } = jobGroup;
    const { store, jobGroupEditStore } = useStore();
    const { isEditMode } = store;
    const { isEditingRecruitNotice, editingJobGroupNameOfRecruitNotice } = jobGroupEditStore;

    return (
        <div className={style.job_type_list_wrap}>
            <Droppable droppableId={name}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {recruitNoticeList.map((recruitNotice, index) => (
                            <RecruitNotice key={recruitNotice.recruitNoticeUrl} recruitNotice={recruitNotice} jobGroupName={name} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {isEditMode && (!isEditingRecruitNotice || editingJobGroupNameOfRecruitNotice !== name) && <RecruitNoticeAdd jobGroupName={name} />}

            {isEditMode && isEditingRecruitNotice && editingJobGroupNameOfRecruitNotice === name && <RecruitNoticeAddForm />}
        </div>
    );
});

export default RecruitNoticeList;
