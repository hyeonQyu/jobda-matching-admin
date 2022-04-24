import React from 'react';
import { observer } from 'mobx-react';
import style from './SuccessStoryAdd.scss';
import { useStore } from '@contexts/StoreContext';

export interface SuccessStoryAddProps {}

const SuccessStoryAdd = observer((props: SuccessStoryAddProps) => {
    const { successReviewEditStore } = useStore();
    const { startEditSuccessStory } = successReviewEditStore;

    return <div className={style.wrapper} onClick={startEditSuccessStory} />;
});

export default SuccessStoryAdd;
