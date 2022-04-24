import React from 'react';
import style from '@styles/union.scss';
import { CompanyInfo } from '@models/CompanyInfo';
import { useStore } from '@contexts/StoreContext';
import EditableCompanyLogo from '@components/common/editable-company-logo/EditableCompanyLogo';

export interface ParticipatingCompanyLogoProps {
    company: CompanyInfo;
}

const ParticipatingCompanyLogo = (props: ParticipatingCompanyLogoProps) => {
    const { company } = props;
    const { imgSrc, url } = company;
    const { store } = useStore();
    const { isEditMode } = store;

    return isEditMode ? (
        <EditableCompanyLogo company={company} />
    ) : (
        <a className={style.cop_item} href={url} target={'_blank'}>
            <img alt={imgSrc} src={imgSrc} />
        </a>
    );
};

export default ParticipatingCompanyLogo;
