import { useEffect } from 'react';
import Store from '@stores/Store';

export interface IUseShortcutsParams {
    store: Store;
}

export default function useShortcuts(params: IUseShortcutsParams) {
    const { store } = params;
    const { save, reset, toggleEditMode } = store;

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 's' && e.ctrlKey) {
                e.preventDefault();
                save();
                return false;
            }

            if (e.key === 'z' && e.ctrlKey) {
                e.preventDefault();
                reset();
                return false;
            }

            if (e.key === 'd' && e.ctrlKey) {
                e.preventDefault();
                toggleEditMode();
                return false;
            }
            return true;
        });
    }, []);
}
