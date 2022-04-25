import React from 'react';
import { observer } from 'mobx-react';
import style from '@styles/union.scss';
import { useStore } from '@contexts/StoreContext';
import EditableYoutubeVideo from '@components/common/editable-card/editable-youtube-video/EditableYoutubeVideo';

export interface YoutubeVideoProps {
    videoSrc: string;
}

const YoutubeVideo = observer((props: YoutubeVideoProps) => {
    const { videoSrc } = props;
    const { store } = useStore();
    const { isEditMode } = store;

    return isEditMode ? (
        <EditableYoutubeVideo videoSrc={videoSrc} />
    ) : (
        <a className={style.jmf_story_item_vid}>
            <iframe
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </a>
    );
});

export default YoutubeVideo;
