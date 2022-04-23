import React from 'react';
import style from '@styles/union.scss';
import { CompanyInfo } from '@models/CompanyInfo';

export interface ParticipatingCompanyLogoProps {
    company: CompanyInfo;
}

const ParticipatingCompanyLogo = (props: ParticipatingCompanyLogoProps) => {
    const { company } = props;
    const { imgSrc, url } = company;

    return (
        <a className={style.cop_item} href={url} target={'_blank'}>
            <img alt={imgSrc} src={imgSrc} />
        </a>
    );
};

export default ParticipatingCompanyLogo;
