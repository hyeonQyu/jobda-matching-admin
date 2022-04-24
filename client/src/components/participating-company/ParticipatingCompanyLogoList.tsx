import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import ParticipatingCompanyLogo from '@components/participating-company/ParticipatingCompanyLogo';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';
import CardAdd from '@components/common/card-add/CardAdd';
import NewCompanyForm from '@components/common/new-company-form/NewCompanyForm';

const ParticipatingCompanyLogoList = observer(() => {
    const { store, companyEditStore } = useStore();
    const { companyList, isEditMode } = store;
    const { startEdit, isEditing } = companyEditStore;

    return (
        <>
            <div className={classNames(style.jmf_item_list_wrap, style.mb1)}>
                {companyList.map((company) => (
                    <ParticipatingCompanyLogo company={company} key={company.url} />
                ))}

                {isEditMode && !isEditing && <CardAdd onClick={startEdit} />}
            </div>

            {isEditMode && isEditing && <NewCompanyForm />}
        </>
    );
});

export default ParticipatingCompanyLogoList;
