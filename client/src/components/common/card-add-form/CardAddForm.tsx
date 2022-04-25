import React from 'react';
import { observer } from 'mobx-react';
import style from './CardAddForm.scss';
import useInputFocus from '@hooks/useInputFocus';

export interface CardAddFormProps {
    placeholder: string;
    text: string;
    setText(text: string);
    placeholder2?: string;
    text2?: string;
    setText2?(text: string);
    onSubmit();
    onCancel();
}

const CardAddForm = observer((props: CardAddFormProps) => {
    const { placeholder, text, setText, placeholder2, text2, setText2, onSubmit, onCancel } = props;
    const { ref } = useInputFocus();

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <div>
                    <div>
                        <input ref={ref} placeholder={placeholder} value={text} required onChange={(e) => setText(e.target.value)} />
                        {placeholder2 && <input placeholder={placeholder2} value={text2} onChange={(e) => setText2(e.target.value)} />}
                    </div>
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
