import React from 'react';
import { observer } from 'mobx-react';
import style from './RecruitNoticeAddForm.scss';
import { useStore } from '@contexts/StoreContext';
import useInput from '@hooks/useInput';
import useInputFocus from '@hooks/useInputFocus';
import SelectBox, { SelectOption } from '@components/common/select-box/SelectBox';

export interface RecruitNoticeAddFormProps {}

const RecruitNoticeAddForm = observer((props: RecruitNoticeAddFormProps) => {
    const { jobGroupEditStore, store } = useStore();
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
    const { companyList } = store;
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

    const companyOptions: SelectOption[] = companyList.map(({ name }) => ({ value: name, text: name }));

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
                            {/*<input className={style.flex} placeholder={'회사명'} required {...inputCompanyName} />*/}
                            <input className={style.half} placeholder={'채용 분야'} required {...inputRecruitSectorName} />
                            <input className={style.half} placeholder={'위치'} required {...inputLocation} />
                        </div>
                    </div>

                    <div className={style.registration_date}>
                        <div className={style.right_wrapper}>
                            <SelectBox
                                options={companyOptions}
                                maxOptionCountAtOnce={10}
                                selectedValue={companyName}
                                onSelect={(value) => setRecruitNoticeCompanyName(value as string)}
                                boxMessage={'회사명'}
                                searchPlaceholder={'회사명 검색'}
                                optionHeight={30}
                            />
                            <div className={style.input_wrapper}>
                                <input className={style.flex} placeholder={'년'} type={'number'} required {...inputYear} style={{ width: '50%' }} />
                                <input className={style.flex} placeholder={'월'} type={'number'} required {...inputMonth} />
                                <input className={style.flex} placeholder={'일'} type={'number'} required {...inputDate} />
                            </div>
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
