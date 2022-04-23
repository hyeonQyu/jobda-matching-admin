import React from 'react';
import style from '@styles/union.scss';
import Header from '@components/header/Header';
import ParticipatingCompany from '@components/participating-company/ParticipatingCompany';
import JobGroup from '@components/job-group/JobGroup';

const Edit = () => {
    return (
        <div className={style.jmf_wrap}>
            <Header />
            <div className={style.jmf_body}>
                <ParticipatingCompany />
                <JobGroup />
            </div>
        </div>
    );
};

export default Edit;
