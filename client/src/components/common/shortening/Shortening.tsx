import React, { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import style from './Shortening.scss';

const cx = classNames.bind(style);

export interface PProps extends HTMLAttributes<any> {
    children: string;
    title?: string;
    className?: string;
}

const Shortening = ({ children, title, className, ...rest }: PProps) => {
    return (
        <p className={classNames(cx('wrapper'), className)} title={title ?? children} {...rest}>
            {children}
        </p>
    );
};

export default Shortening;
