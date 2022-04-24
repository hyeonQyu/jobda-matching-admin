import { useState } from 'react';

export interface IUseEditableCardParams {}

export interface IUseEditableCard {
    onMouseEnter();
    onMouseLeave();
    showMask: boolean;
}

export default function useEditableCard(params?: IUseEditableCardParams): IUseEditableCard {
    const [showMask, setShowMask] = useState(false);

    const onMouseEnter = () => setShowMask(true);
    const onMouseLeave = () => setShowMask(false);

    return {
        onMouseEnter,
        onMouseLeave,
        showMask,
    };
}
