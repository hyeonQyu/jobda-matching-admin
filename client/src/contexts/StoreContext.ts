import React from 'react';
import Store from '@stores/Store';

export const StoreContext = React.createContext<Store>(null);

export const useStore = () => React.useContext(StoreContext);
