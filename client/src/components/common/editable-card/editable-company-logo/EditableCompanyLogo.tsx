import React from 'react';
import { observer } from 'mobx-react';
import style from '../EditableCard.scss';
import classNames from 'classnames';
import { useStore } from '@contexts/StoreContext';
import { CompanyInfo } from '@models/CompanyInfo';
import useEditableCard from '@components/common/editable-card/useEditableCard';

export interface EditableCompanyLogoProps {
    company: CompanyInfo;
}

const EditableCompanyLogo = observer((props: EditableCompanyLogoProps) => {
    const { company } = props;
    const { imgSrc, url } = company;
    const { onMouseEnter, onMouseLeave, showMask } = useEditableCard();
    const { companyEditStore } = useStore();
    const { deleteCompany } = companyEditStore;

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
