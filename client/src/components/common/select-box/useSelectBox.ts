import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { EComponentPosition } from '@components/common/select-box/components/SelectBoxOptions';
import { SelectBoxProps } from '@components/common/select-box/SelectBox';

export interface IUseSelectBoxParams
    extends Pick<
        SelectBoxProps,
        | 'options'
        | 'disabled'
        | 'isMultiSelect'
        | 'selectedValue'
        | 'selectedValueSet'
        | 'onBeforeSelect'
        | 'onSelect'
        | 'keepBoxMessage'
        | 'boxMessage'
    > {}

export interface IUseSelectBox {
    position: EComponentPosition;
    isOpened: boolean;
    selectBoxRef: MutableRefObject<HTMLDivElement>;
    toggleSelectBox();
    getBoxText();
    selectOption(value: string | number, isSelected: boolean);
}

export default function useSelectBox(params: IUseSelectBoxParams): IUseSelectBox {
    const { options, disabled, isMultiSelect, selectedValue, selectedValueSet, onBeforeSelect, onSelect, keepBoxMessage, boxMessage } = params;
    const [position, setPosition] = useState(EComponentPosition.UNDER);
    const [optionMap, setOptionMap] = useState(new Map<string | number, string>());
    const [isOpened, setIsOpened] = useState(false);
    const selectBoxRef = useRef<HTMLDivElement>();

    // 옵션 유효성 체크
    useEffect(() => {
        const optionValueSet = new Set();
        for (const option of options) {
            if (optionValueSet.has(option.value)) {
                console.error(`SelectBox: option의 value는 유일해야 합니다. "value: ${option.value}"가 2개 이상입니다.`);
            }
            optionValueSet.add(option.value);
        }
    }, [options]);

    const getOptionMap = useCallback(() => {
        const map = new Map<string | number, string>();
        options.forEach(({ value, text }) => map.set(value, text));
        return map;
    }, [options]);

    useEffect(() => {
        setOptionMap(getOptionMap());
    }, [options]);

    const closeSelectBox = (e) => {
        if (isOpened && (!selectBoxRef.current || !selectBoxRef.current.contains(e.target))) {
            setIsOpened(false);
        }
    };

    // 다른 곳 클릭 시 SelectBox 닫음
    useEffect(() => {
        window.addEventListener('click', closeSelectBox);
        return () => {
            window.removeEventListener('click', closeSelectBox);
        };
    }, [isOpened]);

    // SelectBox 열기 / 닫기
    const toggleSelectBox = useCallback(() => {
        if (disabled) return;

        if (!isOpened) {
            const clientRect = selectBoxRef.current.getBoundingClientRect();
            const top = clientRect.top;
            const bottom = window.innerHeight - clientRect.bottom;

            if (top < bottom * 3) {
                setPosition(EComponentPosition.UNDER);
            } else {
                setPosition(EComponentPosition.UPPER);
            }
        }

        setIsOpened(!isOpened);
    }, [isOpened, disabled]);

    // 옵션 하나 선택
    const selectOption = useCallback(
        (value: string | number, isSelected: boolean) => {
            if (!onBeforeSelect(value, isSelected)) {
                setIsOpened(false);
                return;
            }

            if (!isMultiSelect) {
                setIsOpened(false);
            }
            onSelect(value, isSelected);
        },
        [isOpened, isMultiSelect, selectedValue, selectedValueSet, onBeforeSelect, onSelect],
    );

    const getBoxText = useCallback(() => {
        // 단일
        if (!isMultiSelect) {
            if (selectedValue) {
                return optionMap.get(selectedValue);
            }
            return boxMessage;
        }

        // 다중
        if (keepBoxMessage) {
            return boxMessage;
        }
        if (selectedValueSet.size > 0) {
            return `${selectedValueSet.size}개 선택 완료`;
        }
        return boxMessage;
    }, [options, isMultiSelect, selectedValue, selectedValueSet, keepBoxMessage, boxMessage]);

    return {
        position,
        isOpened,
        selectBoxRef,
        getBoxText,
        toggleSelectBox,
        selectOption,
    };
}
