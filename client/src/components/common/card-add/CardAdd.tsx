import React from 'react';
import style from './CardAdd.scss';

export interface CardAddProps {
    onClick();
}

const CardAdd = (props: CardAddProps) => {
    const { onClick } = props;
    return <div onClick={onClick} className={style.wrapper} />;
};

export default CardAdd;
