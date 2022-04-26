import React, { ReactNode } from 'react';
import style from './Checkbox.scss';
import classNames from 'classnames';

export interface CheckboxProps {
    checked?: boolean;
    size?: number;
    onChange?: (checked: boolean) => void;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
    const { checked = false, children, className, size = 1, onChange = () => {}, disabled = false } = props;

    const checkboxSizeStyle = {
        width: `${size}rem`,
        height: `${size}rem`,
    };

    const changeChecked = () => {
        if (disabled) return;
        onChange(!checked);
    };

    return (
        <div className={classNames(className, style.wrapper)} onClick={changeChecked}>
            <div className={classNames(style.checkbox, checked && style.checked, disabled && style.disabled)} style={checkboxSizeStyle} />
            {children && <div>{children}</div>}
        </div>
    );
};

export default Checkbox;
