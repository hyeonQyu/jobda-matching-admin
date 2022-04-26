import React from 'react';
import { observer } from 'mobx-react';
import style from './Sidebar.scss';
import { useStore } from '@contexts/StoreContext';

const Sidebar = observer(() => {
    const { store } = useStore();
    const { reset, save, toggleEditMode, extractHtml, isEditMode } = store;

    return (
        <div className={style.wrapper}>
            <div className={style.button_wrapper}>
                <div className={style.button} onClick={save}>
                    저장
                </div>
                <div className={style.button} onClick={toggleEditMode}>
                    {isEditMode ? '미리보기' : '편집으로'}
                </div>
                <div className={style.button} onClick={reset}>
                    처음으로
                </div>
                <div className={style.button} onClick={extractHtml}>
                    HTML 파일 추출
                </div>
            </div>
        </div>
    );
});

export default Sidebar;
