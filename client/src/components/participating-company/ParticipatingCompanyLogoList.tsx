import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';
import ParticipatingCompanyLogo from '@components/participating-company/ParticipatingCompanyLogo';
import { useStore } from '@contexts/StoreContext';
import { observer } from 'mobx-react';
import CardAdd from '@components/common/card-add/CardAdd';
import CardAddForm from '@components/common/card-add-form/CardAddForm';

const ParticipatingCompanyLogoList = observer(() => {
    const { store, companyEditStore } = useStore();
    const { companyList, isEditMode } = store;
    const { startEdit, isEditing, nameOfJobda, nameOfImage, setNameOfJobda, setNameOfImage, addCompany, finishEdit } = companyEditStore;

    return (
        <>
            <div className={classNames(style.jmf_item_list_wrap, style.mb1)}>
                {companyList.map((company) => (
                    <ParticipatingCompanyLogo company={company} key={company.url} />
                ))}

                {isEditMode && !isEditing && <CardAdd onClick={startEdit} />}
            </div>

            {isEditMode && isEditing && (
                <CardAddForm
                    text={nameOfJobda}
                    setText={setNameOfJobda}
                    placeholder={'(잡다)회사명 입력'}
                    text2={nameOfImage}
                    setText2={setNameOfImage}
                    placeholder2={'(이미지)회사명 입력'}
                    onSubmit={addCompany}
                    onCancel={finishEdit}
                />
            )}
        </>
    );
});

export default ParticipatingCompanyLogoList;
