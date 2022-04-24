import React from 'react';
import { observer } from 'mobx-react';
import style from '@styles/union.scss';
import { SuccessStoryInfo } from '@models/SuccessStoryInfo';

export interface SuccessStoryProps {
    successStory: SuccessStoryInfo;
}

const SuccessStory = observer((props: SuccessStoryProps) => {
    const { successStory } = props;
    const { title, companyImgSrc, companyName, description, userId } = successStory;

    const id = `${userId.substring(0, 2)}****`;

    return (
        <div className={style.jmf_story_item}>
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
        </div>
    );
});

export default SuccessStory;
