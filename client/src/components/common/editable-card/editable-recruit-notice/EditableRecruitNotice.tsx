import React from 'react';
import { observer } from 'mobx-react';
import style from '../EditableCard.scss';
import style2 from '@styles/union.scss';
import classNames from 'classnames';
import useEditableCard from '@components/common/editable-card/useEditableCard';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import useDatetime from '@hooks/useDatetime';
import { useStore } from '@contexts/StoreContext';

export interface EditableRecruitNoticeProps {
    jobGroupName: string;
    recruitNotice: RecruitNoticeInfo;
}

const EditableRecruitNotice = observer((props: EditableRecruitNoticeProps) => {
    const { jobGroupName, recruitNotice } = props;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();
    const { title, job, recruitNoticeUrl, recruitSectorName, companyName, registrationDatetime, location } = recruitNotice;
    const { datetimeFormat } = useDatetime({ datetime: registrationDatetime });
    const { jobGroupEditStore } = useStore();
    const { deleteRecruitNotice } = jobGroupEditStore;

    const onClickDelete = () => deleteRecruitNotice(jobGroupName, recruitNoticeUrl);

    return (
        <div
            className={classNames(style.wrapper, style.recruit_notice, style2.job_type_list_item)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={style2.job_type_item_wrap}>
                <div className={style2.job_type_list_title}>
                    {title}
                    <span className={style2.jmf_new_tag}>N</span>
                </div>

                <div className={style2.job_type_type}>{job}</div>

                <div className={style2.job_type_info}>
                    <span>{companyName}</span> <span>{recruitSectorName}</span> <span>{location}</span>
                </div>
            </div>

            <div className={style2.job_type_date}>
                <span>등록일</span>
                <span>{datetimeFormat}</span>
            </div>

            {showMask && (
                <>
                    <div className={classNames(style.mask)} />
                    <button onClick={onClickDelete}>삭제</button>
                </>
            )}
        </div>
    );
});

export default EditableRecruitNotice;
