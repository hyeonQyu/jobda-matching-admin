import React from 'react';
import SelectBoxHead from './components/SelectBoxHead';
import SelectBoxOptions from './components/SelectBoxOptions';
import classNames from 'classnames/bind';
import style from './SelectBox.scss';
import useSelectBox from '@components/common/select-box/useSelectBox';

const cx = classNames.bind(style);

export interface SelectOption {
    value: string | number;
    text: string;
}

export interface SelectBoxProps {
    // 선택할 수 있는 항목 목록
    options?: SelectOption[];

    // 다중 선택 여부
    isMultiSelect?: boolean;

    // 단일 선택에서 선택된 값
    selectedValue?: number | string;

    // 다중 선택에서 선택된 값 목록
    selectedValueSet?: Set<number | string>;

    // 선택 전 실행되는 콜백함수, false 리턴 시 onSelect가 실행되지 않음
    onBeforeSelect?: (value: string | number, isSelected?: boolean) => boolean;

    // 옵션 선택 시 실행되는 콜백함수
    onSelect?: (value: string | number, isSelected?: boolean) => void;

    // 셀렉트 박스가 아무것도 선택되지 않았을 때 표시되는 메시지, 단일 선택에서도 필요
    boxMessage?: string;

    // 선택 후에도 boxMessage 유지 여부
    keepBoxMessage?: boolean;

    // SelectBox 컴포넌트 wrapper에 대한 클래스 이름
    className?: string;

    // SelectBox 선택된 항목이 나타나는 부분에 대한 클래스 이름
    boxClassName?: string;

    // 드롭다운으로 option이 펼쳐지는 영역에 대한 클래스 이름
    optionsClassName?: string;

    // option 하나에 대한 클래스 이름
    optionClassName?: string;

    // option 하나의 높이
    optionHeight?: number;

    // 드롭다운 한번에 보이는 option 최대 갯수
    maxOptionCountAtOnce?: number;

    disabled?: boolean;

    searchPlaceholder?: string;
}

const SelectBox = (props: SelectBoxProps) => {
    const {
        options = [],
        isMultiSelect = false,
        selectedValue,
        selectedValueSet = new Set(),
        onBeforeSelect = () => true,
        onSelect = () => {},
        boxMessage = '항목을 선택하세요.',
        keepBoxMessage = false,
        className,
        boxClassName,
        optionsClassName,
        optionClassName,
        optionHeight = 32,
        maxOptionCountAtOnce = 10,
        disabled = false,
        searchPlaceholder = '',
    } = props;

    const { selectBoxRef, isOpened, position, toggleSelectBox, selectOption, getBoxText } = useSelectBox({
        options,
        isMultiSelect,
        selectedValue,
        selectedValueSet,
        keepBoxMessage,
        boxMessage,
        onBeforeSelect,
        onSelect,
        disabled,
    });

    return (
        <div className={classNames(cx('wrapper', disabled ? 'disabled' : ''), className)} ref={selectBoxRef}>
            <SelectBoxHead isOpened={isOpened} toggleSelectBox={toggleSelectBox} className={boxClassName}>
                {getBoxText()}
            </SelectBoxHead>

            <SelectBoxOptions
                isOpened={isOpened}
                options={options}
                onSelectOption={selectOption}
                isMultiSelect={isMultiSelect}
                optionsClassName={optionsClassName}
                optionClassName={optionClassName}
                selectedValue={selectedValue}
                selectedValueSet={selectedValueSet}
                optionHeight={optionHeight}
                maxOptionCountAtOnce={maxOptionCountAtOnce}
                position={position}
                searchPlaceholder={searchPlaceholder}
            />
        </div>
    );
};

export default React.memo(SelectBox, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps));
