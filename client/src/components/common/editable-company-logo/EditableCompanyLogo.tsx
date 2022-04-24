import React, { useState } from 'react';
import { observer } from 'mobx-react';
import style from './EditableCompanyLogo.scss';
import classNames from 'classnames';
import { useStore } from '@contexts/StoreContext';
import { CompanyInfo } from '@models/CompanyInfo';

export interface EditableCompanyLogoProps {
    company: CompanyInfo;
}

const EditableCompanyLogo = observer((props: EditableCompanyLogoProps) => {
    const { company } = props;
    const { imgSrc, url } = company;
    const [showMask, setShowMask] = useState(false);
    const { companyEditStore } = useStore();
    const { deleteCompany } = companyEditStore;

    const onMouseEnter = () => setShowMask(true);
    const onMouseLeave = () => setShowMask(false);
    const onClickDelete = () => deleteCompany(url);

    return (
        <div className={style.wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img alt={imgSrc} src={imgSrc} />
            {showMask && (
                <>
                    <div className={classNames(style.mask)} />
                    <button onClick={onClickDelete}>삭제</button>
                </>
            )}
        </div>
    );
});

export default EditableCompanyLogo;
