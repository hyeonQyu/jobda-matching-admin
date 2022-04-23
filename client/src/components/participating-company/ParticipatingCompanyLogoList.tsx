import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import ParticipatingCompanyLogo from '@components/participating-company/ParticipatingCompanyLogo';
import { CompanyInfo } from '@models/CompanyInfo';

export interface ParticipatingCompanyListProps {
    companyList: CompanyInfo[];
}

const ParticipatingCompanyLogoList = (props: ParticipatingCompanyListProps) => {
    const { companyList } = props;

    return (
        <div className={classNames(style.jmf_item_list_wrap, style.mb1)}>
            {companyList.map((company) => (
                <ParticipatingCompanyLogo company={company} />
            ))}
        </div>
    );
};

export default ParticipatingCompanyLogoList;
