import React from 'react';
import { observer } from 'mobx-react';
import style from './SuccessStoryAddForm.scss';
import { useStore } from '@contexts/StoreContext';
import useInput from '@hooks/useInput';

export interface SuccessStoryAddFormProps {}

const SuccessStoryAddForm = observer((props: SuccessStoryAddFormProps) => {
    const { successReviewEditStore } = useStore();
    const {
        successStory,
        setSuccessStoryTitle,
        setSuccessStoryUserId,
        setSuccessStoryDescription,
        setSuccessStoryCompanyName,
        setSuccessStoryCompanyImgSrc,
        addSuccessStory,
        finishEditSuccessStory,
    } = successReviewEditStore;
    const { title, userId, companyImgSrc, companyName, description } = successStory;

    const inputTitle = useInput({
        value: title,
        setValue: setSuccessStoryTitle,
    });
    const inputUserId = useInput({
        value: userId,
        setValue: setSuccessStoryUserId,
    });
    const inputCompanyImgSrc = useInput({
        value: companyImgSrc,
        setValue: setSuccessStoryCompanyImgSrc,
    });
    const inputCompanyName = useInput({
        value: companyName,
        setValue: setSuccessStoryCompanyName,
    });
    const inputDescription = useInput({
        value: description,
        setValue: setSuccessStoryDescription,
    });

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addSuccessStory();
                }}
            >
                <input placeholder={'제목'} {...inputTitle} required />
                <div className={style.flex}>
                    <input placeholder={'사용자 아이디'} {...inputUserId} required />
                    <input placeholder={'회사 로고 URL'} {...inputCompanyImgSrc} required />
                </div>
                <div className={style.flex}>
                    <input placeholder={'회사명'} {...inputCompanyName} required />
                    <div className={style.input}>{(inputUserId.value as string).substring(0, 2)}****</div>
                </div>
                <div className={style.textarea_wrapper}>
                    <textarea placeholder={'내용'} {...inputDescription} required />
                </div>
                <div className={style.button_wrapper}>
                    <button className={style.add}>추가</button>
                    <button type={'button'} className={style.cancel} onClick={finishEditSuccessStory}>
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
});

export default SuccessStoryAddForm;
