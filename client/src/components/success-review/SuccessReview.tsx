import React from 'react';
import { observer } from 'mobx-react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import { useStore } from '@contexts/StoreContext';
import SuccessStory from '@components/success-review/components/SuccessStory';

export interface SuccessReviewProps {}

const SuccessReview = observer((props: SuccessReviewProps) => {
    const { store } = useStore();
    const { successStoryList } = store;

    return (
        <div id={'jmf_body_sec03'} className={style.jmf_body_sec03}>
            <p className={classNames(style.title_04, style.mb3)}>잡다매칭 취업성공 후기를 확인해보세요👀</p>
            {successStoryList.map((story) => (
                <SuccessStory successStory={story} />
            ))}
        </div>
    );
});

export default SuccessReview;
