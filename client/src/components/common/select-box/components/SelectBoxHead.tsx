import React from 'react';
import classNames from 'classnames/bind';
import style from '../SelectBox.scss';
import DropdownArrowIcon from '../icons/DropdownArrowIcon';

const cx = classNames.bind(style);

export interface SelectBoxHeadProps {
    isOpened: boolean;
    toggleSelectBox: () => void;
    children: string;
    className: string;
}

const SelectBoxHead = (props: SelectBoxHeadProps) => {
    const { isOpened, toggleSelectBox, children, className } = props;

    const opened = isOpened ? 'opened' : '';

    return (
        <div className={classNames(cx('box', opened), className)} onClick={toggleSelectBox}>
            <p className={cx('text')}>{children}</p>
            <div className={cx('arrow')}>
                <DropdownArrowIcon />
            </div>
        </div>
    );
};

export default SelectBoxHead;
