import React from 'react';
import { observer } from 'mobx-react';
import style from '../EditableCard.scss';
import style2 from '@styles/union.scss';
import classNames from 'classnames';
import useEditableCard from '@components/common/editable-card/useEditableCard';
import { RecruitNoticeInfo } from '@models/RecruitNoticeInfo';
import useDatetime from '@hooks/useDatetime';
import { useStore } from '@contexts/StoreContext';
import Checkbox from '@components/common/checkbox/Checkbox';

export interface EditableRecruitNoticeProps {
    jobGroupName: string;
    recruitNotice: RecruitNoticeInfo;
    index: number;
}

const EditableRecruitNotice = observer((props: EditableRecruitNoticeProps) => {
    const { jobGroupName, recruitNotice, index } = props;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();
    const { title, job, recruitNoticeUrl, recruitSectorName, companyName, registrationDatetime, location, isNew } = recruitNotice;
    const { datetimeFormat } = useDatetime({ datetime: registrationDatetime });
    const { jobGroupEditStore, store } = useStore();
    const { deleteRecruitNotice } = jobGroupEditStore;
    const { checkIsRecruitNoticeNew } = store;

    const onClickDelete = () => deleteRecruitNotice(jobGroupName, recruitNoticeUrl);
    const toggleIsNew = () => checkIsRecruitNoticeNew(jobGroupName, index);

    return (
        <div
            className={classNames(style.wrapper, style.recruit_notice, style2.job_type_list_item)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={style2.job_type_item_wrap}>
                <div className={style2.job_type_list_title}>
                    {title}
                    {isNew && <span className={style2.jmf_new_tag}>N</span>}
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
                    <div className={style.button_wrapper}>
                        <button onClick={onClickDelete}>삭제</button>
                        <Checkbox className={style.checkbox} checked={isNew} size={1.5} onChange={toggleIsNew}>
                            <p>새 공고 여부</p>
                        </Checkbox>
                    </div>
                </>
            )}
        </div>
    );
});

export default EditableRecruitNotice;
