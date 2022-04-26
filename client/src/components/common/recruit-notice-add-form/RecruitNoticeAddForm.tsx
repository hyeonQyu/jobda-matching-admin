import React from 'react';
import { observer } from 'mobx-react';
import style from './RecruitNoticeAddForm.scss';
import { useStore } from '@contexts/StoreContext';
import useInput from '@hooks/useInput';
import useInputFocus from '@hooks/useInputFocus';

export interface RecruitNoticeAddFormProps {}

const RecruitNoticeAddForm = observer((props: RecruitNoticeAddFormProps) => {
    const { jobGroupEditStore } = useStore();
    const {
        recruitNotice,
        setRecruitNoticeTitle,
        setRecruitNoticeJob,
        setRecruitNoticeCompanyName,
        setRecruitNoticeRecruitSectorName,
        setRecruitNoticeLocation,
        setRecruitNoticeRegistrationDateYear,
        setRecruitNoticeRegistrationDateMonth,
        setRecruitNoticeRegistrationDateDate,
        setRecruitNoticeUrl,
        addRecruitNotice,
        finishEditRecruitNotice,
    } = jobGroupEditStore;
    const { title, job, companyName, location, recruitNoticeUrl, recruitSectorName, registrationDatetime } = recruitNotice;
    const { ref } = useInputFocus();

    const inputTitle = useInput({
        value: title,
        setValue: setRecruitNoticeTitle,
    });
    const inputJob = useInput({
        value: job,
        setValue: setRecruitNoticeJob,
    });
    const inputCompanyName = useInput({
        value: companyName,
        setValue: setRecruitNoticeCompanyName,
    });
    const inputRecruitSectorName = useInput({
        value: recruitSectorName,
        setValue: setRecruitNoticeRecruitSectorName,
    });
    const inputLocation = useInput({
        value: location,
        setValue: setRecruitNoticeLocation,
    });
    const inputYear = useInput({
        value: registrationDatetime.year,
        setValue: setRecruitNoticeRegistrationDateYear,
    });
    const inputMonth = useInput({
        value: registrationDatetime.month,
        setValue: setRecruitNoticeRegistrationDateMonth,
    });
    const inputDate = useInput({
        value: registrationDatetime.date,
        setValue: setRecruitNoticeRegistrationDateDate,
    });
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
                <div className={style.form_section}>
                    <div>
                        <input placeholder={'채용 공고 제목'} required {...inputTitle} ref={ref} />
                        <input placeholder={'직무'} required {...inputJob} />
                        <div className={style.input_wrapper}>
                            <input className={style.flex} placeholder={'회사명'} required {...inputCompanyName} />
                            <input className={style.flex} placeholder={'채용 분야'} required {...inputRecruitSectorName} />
                            <input className={style.flex} placeholder={'위치'} required {...inputLocation} />
                        </div>
                    </div>

                    <div className={style.registration_date}>
                        <div className={style.input_wrapper}>
                            <input className={style.flex} placeholder={'년'} type={'number'} required {...inputYear} style={{ width: '50%' }} />
                            <input className={style.flex} placeholder={'월'} type={'number'} required {...inputMonth} />
                            <input className={style.flex} placeholder={'일'} type={'number'} required {...inputDate} />
                        </div>
                    </div>
                </div>

                <input placeholder={'공고 URL'} required {...inputUrl} />
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
