import React from 'react';
import { observer } from 'mobx-react';
import style from './RecruitNoticeAddForm.scss';
import { useStore } from '@contexts/StoreContext';
import useInput from '@hooks/useInput';
import useInputFocus from '@hooks/useInputFocus';

export interface RecruitNoticeAddFormProps {}

const RecruitNoticeAddForm = observer((props: RecruitNoticeAddFormProps) => {
    const { jobGroupEditStore } = useStore();
    const { recruitNotice, setRecruitNoticeUrl, addRecruitNotice, finishEditRecruitNotice } = jobGroupEditStore;
    const { recruitNoticeUrl } = recruitNotice;
    const { ref } = useInputFocus();

    const inputUrl = useInput({
        value: recruitNoticeUrl,
        setValue: setRecruitNoticeUrl,
    });

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addRecruitNotice();
                }}
            >
                <input placeholder={'공고 URL'} required {...inputUrl} ref={ref} />
                <div className={style.button_section}>
                    <button className={style.cancel} type={'button'} onClick={finishEditRecruitNotice}>
                        취소
                    </button>
                    <button className={style.add}>추가</button>
                </div>
            </form>
        </div>
    );
});

export default RecruitNoticeAddForm;
