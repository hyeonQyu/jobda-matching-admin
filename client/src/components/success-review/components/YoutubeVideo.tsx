import React from 'react';
import { observer } from 'mobx-react';
import style from '@styles/union.scss';

export interface YoutubeVideoProps {
    videoSrc: string;
}

const YoutubeVideo = observer((props: YoutubeVideoProps) => {
    const { videoSrc } = props;

    return (
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
