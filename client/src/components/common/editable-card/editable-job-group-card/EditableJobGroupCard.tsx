import React from 'react';
import { observer } from 'mobx-react';
import style from '../EditableCard.scss';
import classNames from 'classnames';
import useEditableCard from '@components/common/editable-card/useEditableCard';
import { useStore } from '@contexts/StoreContext';
import { JobGroupInfo } from '@models/JobGroupInfo';

export interface EditableJobGroupCardProps {
    jobGroup: JobGroupInfo;
}

const EditableJobGroupCard = observer((props: EditableJobGroupCardProps) => {
    const { jobGroup } = props;
    const { name, recruitNoticeList } = jobGroup;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();
    const { jobGroupEditStore } = useStore();
    const { deleteJobGroup } = jobGroupEditStore;

    const onClickDelete = () => deleteJobGroup(name);

    return (
        <div className={classNames(style.wrapper, style.job_group)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <p>{name}</p>
            <p>({recruitNoticeList.length})</p>
            {showMask && (
                <>
                    <div className={classNames(style.mask)} />
                    <button onClick={onClickDelete}>삭제</button>
                </>
            )}
        </div>
    );
});

export default EditableJobGroupCard;
