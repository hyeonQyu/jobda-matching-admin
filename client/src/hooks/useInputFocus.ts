import { MutableRefObject, useEffect, useRef } from 'react';

export interface IUseInputFocus {
    ref: MutableRefObject<HTMLInputElement>;
}

export default function useInputFocus(): IUseInputFocus {
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref]);

    return {
        ref,
    };
}
