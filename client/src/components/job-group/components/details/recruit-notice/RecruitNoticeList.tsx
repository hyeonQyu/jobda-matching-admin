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
    isDetailsOpened: boolean;
}

const RecruitNoticeList = observer((props: RecruitNoticeListProps) => {
    const { jobGroup, isDetailsOpened } = props;
    const { recruitNoticeList, name } = jobGroup;
    const { store, jobGroupEditStore } = useStore();
    const { isEditMode } = store;
    const { isEditingRecruitNotice, editingJobGroupNameOfRecruitNotice } = jobGroupEditStore;

    const list = recruitNoticeList.map((recruitNotice, index) => (
        <RecruitNotice
            key={recruitNotice.recruitNoticeUrl}
            recruitNotice={recruitNotice}
            jobGroupName={name}
            index={index}
            isDetailsOpened={isDetailsOpened}
        />
    ));

    return (
        <div className={style.job_type_list_wrap}>
            {isDetailsOpened ? (
                <Droppable droppableId={name}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {list}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ) : (
                list
            )}

            {isEditMode && (!isEditingRecruitNotice || editingJobGroupNameOfRecruitNotice !== name) && <RecruitNoticeAdd jobGroupName={name} />}

            {isEditMode && isEditingRecruitNotice && editingJobGroupNameOfRecruitNotice === name && <RecruitNoticeAddForm />}
        </div>
    );
});

export default RecruitNoticeList;
