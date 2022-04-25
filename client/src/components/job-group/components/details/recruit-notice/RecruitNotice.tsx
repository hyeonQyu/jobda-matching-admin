import React from 'react';
import style from '@styles/union.scss';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import useDatetime from '@hooks/useDatetime';
import { useStore } from '@contexts/StoreContext';
import EditableRecruitNotice from '@components/common/editable-card/editable-recruit-notice/EditableRecruitNotice';
import { Draggable } from 'react-beautiful-dnd';

export interface RecruitNoticeProps {
    recruitNotice: RecruitNoticeInfo;
    jobGroupName: string;
    index: number;
}

const RecruitNotice = (props: RecruitNoticeProps) => {
    const { recruitNotice, index } = props;
    const { recruitSectorName, recruitNoticeUrl, companyName, job, location, registrationDatetime, title } = recruitNotice;
    const { datetimeFormat } = useDatetime({ datetime: registrationDatetime });
    const { store } = useStore();
    const { isEditMode } = store;

    return isEditMode ? (
        <Draggable draggableId={recruitNoticeUrl} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <EditableRecruitNotice {...props} />
                </div>
            )}
        </Draggable>
    ) : (
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
