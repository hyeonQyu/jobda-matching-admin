import React from 'react';
import { observer } from 'mobx-react';
import style2 from '../EditableCard.scss';
import classNames from 'classnames';
import useEditableCard from '@components/common/editable-card/useEditableCard';
import { useStore } from '@contexts/StoreContext';

export interface EditableYoutubeVideoProps {
    videoSrc: string;
}

const EditableYoutubeVideo = observer((props: EditableYoutubeVideoProps) => {
    const { videoSrc } = props;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();
    const { successReviewEditStore } = useStore();
    const { deleteYoutubeVideo } = successReviewEditStore;

    const onClickDelete = () => deleteYoutubeVideo(videoSrc);

    return (
        <div className={classNames(style2.wrapper, style2.youtube_video)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <iframe
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            {showMask && (
                <>
                    <div className={classNames(style2.mask)} />
                    <button className={style2.big} onClick={onClickDelete}>
                        삭제
                    </button>
                </>
            )}
        </div>
    );
});

export default EditableYoutubeVideo;
