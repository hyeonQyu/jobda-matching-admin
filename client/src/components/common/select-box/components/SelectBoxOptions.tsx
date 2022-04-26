import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from '../SelectBox.scss';
import { SelectOption } from '../SelectBox';
import Checkbox from '../../Checkbox/Checkbox';
import Scrollbars from 'react-custom-scrollbars';
import Shortening from '@components/common/shortening/Shortening';
import SearchBarIcon from '@icons/SearchBarIcon';

const cx = classNames.bind(style);

export enum EComponentPosition {
    UPPER = 'upper',
    UNDER = 'under',
}

interface SelectBoxOptionsProps {
    isOpened: boolean;
    options: SelectOption[];
    onSelectOption: (value: string | number, isSelected: boolean) => void;
    isMultiSelect: boolean;
    optionsClassName: string;
    optionClassName: string;
    optionHeight: number;
    maxOptionCountAtOnce: number;
    selectedValue?: number | string;
    selectedValueSet?: Set<number | string>;
    position: EComponentPosition;
    searchPlaceholder: string;
}

const SelectBoxOptions = (props: SelectBoxOptionsProps) => {
    const {
        isOpened,
        options,
        onSelectOption,
        isMultiSelect,
        optionsClassName,
        optionClassName,
        selectedValue,
        selectedValueSet,
        optionHeight,
        maxOptionCountAtOnce,
        position,
        searchPlaceholder,
    } = props;
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [keyword, setKeyword] = useState('');
    const [dropdownStyle, setDropdownStyle] = useState<CSSProperties>({});
    const [optionListStyle, setOptionListStyle] = useState<CSSProperties>({});

    useEffect(() => {
        setKeyword('');
    }, [isOpened]);

    useEffect(() => {
        setFilteredOptions(
            options.filter(({ text }) => {
                return text.indexOf(keyword) > -1;
            }),
        );
    }, [options, keyword, searchPlaceholder]);

    useEffect(() => {
        setDropdownStyle({
            height: (() => {
                let length = Math.max(1, Math.min(filteredOptions.length, maxOptionCountAtOnce));
                searchPlaceholder && length++;
                return length * optionHeight;
            })(),
            display: isOpened ? 'block' : 'none',
        });
        setOptionListStyle({
            height: searchPlaceholder && filteredOptions.length > maxOptionCountAtOnce ? `calc(100% - ${optionHeight}px)` : `100%`,
        });
    }, [filteredOptions, optionHeight, maxOptionCountAtOnce, isOpened]);

    const onChangeKeyword = (e) => setKeyword(e.target.value);
    const selectOption = (checked: boolean) => onSelectOption('', checked);

    const renderOptions = () => {
        if (isMultiSelect) {
            return filteredOptions.map(({ value, text }) => (
                <div key={value} style={{ height: optionHeight }} className={classNames(cx('option'), optionClassName)}>
                    <Checkbox checked={selectedValueSet.has(value)} onChange={selectOption}>
                        <Shortening style={{ lineHeight: optionHeight }}>{text}</Shortening>
                    </Checkbox>
                </div>
            ));
        }

        return filteredOptions.map(({ value, text }) => {
            const isSelected = selectedValue === value;
            return (
                <div
                    key={value}
                    onClick={() => onSelectOption(value, true)}
                    style={{ height: optionHeight }}
                    className={classNames(cx('option', isSelected && 'selected'), optionClassName)}
                >
                    <Shortening style={{ lineHeight: `${optionHeight}px` }}>{text}</Shortening>
                </div>
            );
        });
    };

    const inputRef = useRef<HTMLInputElement>();
    useEffect(() => {
        if (inputRef.current && isOpened) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }
    }, [inputRef, isOpened]);

    return (
        <div className={classNames(cx('options', position), optionsClassName)} style={dropdownStyle}>
            {searchPlaceholder && (
                <div className={cx('search')}>
                    <input ref={inputRef} onChange={onChangeKeyword} placeholder={searchPlaceholder} value={keyword} />
                    <SearchBarIcon />
                </div>
            )}
            <div style={optionListStyle}>
                <Scrollbars thumbMinSize={30} renderTrackHorizontal={() => <div />} renderThumbHorizontal={() => <div />} hideTracksWhenNotNeeded>
                    {renderOptions()}
                </Scrollbars>
            </div>
        </div>
    );
};

export default SelectBoxOptions;
