import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import ParticipatingCompanyLogo from '@components/participating-company/ParticipatingCompanyLogo';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';

const ParticipatingCompanyLogoList = observer(() => {
    const store = useStore();
    const { companyList } = store;

    return (
        <div className={classNames(style.jmf_item_list_wrap, style.mb1)}>
            {companyList.map((company) => (
                <ParticipatingCompanyLogo company={company} key={company.url} />
            ))}
        </div>
    );
});

export default ParticipatingCompanyLogoList;
