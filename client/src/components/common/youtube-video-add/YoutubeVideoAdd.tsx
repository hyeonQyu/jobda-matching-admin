import React from 'react';
import { observer } from 'mobx-react';
import style from './YoutubeVideoAdd.scss';
import { useStore } from '@contexts/StoreContext';

export interface YoutubeVideoAddProps {}

const YoutubeVideoAdd = observer(() => {
    const { successReviewEditStore } = useStore();
    const { startEditYoutubeVideo } = successReviewEditStore;

    return <div className={style.wrapper} onClick={startEditYoutubeVideo} />;
});

export default YoutubeVideoAdd;
