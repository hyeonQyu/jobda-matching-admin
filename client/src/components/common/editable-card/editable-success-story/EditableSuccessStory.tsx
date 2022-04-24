import React from 'react';
import { observer } from 'mobx-react';
import style2 from '../EditableCard.scss';
import style from '@styles/union.scss';
import { SuccessStoryInfo } from '@models/SuccessStoryInfo';
import { useStore } from '@contexts/StoreContext';
import useEditableCard from '@components/common/editable-card/useEditableCard';
import classNames from 'classnames';

export interface EditableSuccessStoryProps {
    successStory: SuccessStoryInfo;
}

const EditableSuccessStory = observer((props: EditableSuccessStoryProps) => {
    const { successStory } = props;
    const { title, userId, companyImgSrc, companyName, description } = successStory;
    const { successReviewEditStore } = useStore();
    const { deleteSuccessStory } = successReviewEditStore;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();

    const onClickDelete = () => deleteSuccessStory(successStory);
    const id = `${userId.substring(0, 2)}****`;

    return (
        <div className={classNames(style2.wrapper, style2.success_story)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <p className={style.jmf_story_title}>{title}</p>
            <p className={style.jmf_story_img}>
                <img alt={'사용자 로고'} src="https://www.midashri.com/hubfs/2022JMF/jobda/jmf_matching_id01.png" />
                <img alt={'회사 로고'} src={companyImgSrc} />
                <span>X</span>
            </p>
            <p className={style.jmf_story_text}>{description}</p>
            <p className={style.jmf_story_cop}>
                {companyName} - {id}
            </p>

            {showMask && (
                <>
                    <div className={classNames(style2.mask)} />
                    <button className={style2.success_story} onClick={onClickDelete}>
                        삭제
                    </button>
                </>
            )}
        </div>
    );
});

export default EditableSuccessStory;
