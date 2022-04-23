import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import ParticipatingCompanyLogoList from '@components/participating-company/ParticipatingCompanyLogoList';

const ParticipatingCompany = () => {
    const companyList = [
        {
            url: 'https://www.jobda.im/match/position?keyword=퍼포먼스바이TBWA',
            imgSrc: 'https://www.midashri.com/hubfs/2022JMF/logo/퍼포먼스바이TBWA.png',
        },
    ];

    return (
        <div id="jmf_body_sec01">
            <p className={classNames(style.text_04, style.mb3)}>(2022.04.01 기준)</p>
            <p className={style.title_06}>잡다매칭 페스티벌 참여기업</p>
            <p className={classNames(style.text_04, style.mb3)}>로고를 클릭하면 기업에서 모집중인 포지션을 볼 수 있어요.</p>

            <ParticipatingCompanyLogoList companyList={companyList} />
        </div>
    );
};

export default ParticipatingCompany;
