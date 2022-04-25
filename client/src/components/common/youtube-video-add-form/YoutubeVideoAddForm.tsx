import React from 'react';
import { observer } from 'mobx-react';
import style from './YoutubeVideoAddForm.scss';
import { useStore } from '@contexts/StoreContext';
import useInput from '@hooks/useInput';

export interface YoutubeVideoAddFormProps {}

const YoutubeVideoAddForm = observer(() => {
    const { successReviewEditStore } = useStore();
    const { youtubeVideoSrc, setYoutubeVideoSrc, addYoutubeVideo, finishEditYoutubeVideo } = successReviewEditStore;
    const inputVideoSrc = useInput({ value: youtubeVideoSrc, setValue: setYoutubeVideoSrc });

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addYoutubeVideo();
                }}
            >
                <input placeholder={'유튜브 비디오 URL'} {...inputVideoSrc} required />
                <div className={style.button_wrapper}>
                    <button className={style.add}>추가</button>
                    <button type={'button'} className={style.cancel} onClick={finishEditYoutubeVideo}>
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
});

export default YoutubeVideoAddForm;
