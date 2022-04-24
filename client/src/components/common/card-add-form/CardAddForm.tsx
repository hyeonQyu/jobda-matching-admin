import React from 'react';
import { observer } from 'mobx-react';
import style from './CardAddForm.scss';

export interface CardAddFormProps {
    placeholder: string;
    text: string;
    setText(text: string);
    onSubmit();
    onCancel();
}

const CardAddForm = observer((props: CardAddFormProps) => {
    const { placeholder, text, setText, onSubmit, onCancel } = props;

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <div>
                    <input placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)} />
                    <div className={style.button_wrapper}>
                        <button className={style.add}>추가</button>
                        <button type={'button'} onClick={onCancel} className={style.cancel}>
                            취소
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
});

export default CardAddForm;
