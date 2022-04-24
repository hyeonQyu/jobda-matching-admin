import React from 'react';
import { observer } from 'mobx-react';
import style from './NewCompanyForm.scss';
import { useStore } from '@contexts/StoreContext';

const NewCompanyForm = observer(() => {
    const { companyEditStore } = useStore();
    const { name, setName, addCompany } = companyEditStore;

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addCompany(name);
                }}
            >
                <div>
                    <input placeholder={'사명 입력'} value={name} onChange={(e) => setName(e.target.value)} />
                    <div className={style.button_wrapper}>
                        <button className={style.add}>추가</button>
                        <button type={'button'} className={style.cancel}>
                            취소
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
});

export default NewCompanyForm;
